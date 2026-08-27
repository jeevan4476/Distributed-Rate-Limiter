import { readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";
import path from "path";

interface CallFrame {
    functionName: string;
    scriptId: string;
    url: string;
    lineNumber: number;
    columnNumber: number;
}

interface Node {
    id: number;
    callFrame: CallFrame;
    children?: number[];
}

interface CpuProfile {
    nodes: Node[];
    samples: number[];
}

function convertCpuProfileToFolded(profilePath: string): string {
    const raw = readFileSync(profilePath, "utf-8");
    const profile: CpuProfile = JSON.parse(raw);

    const nodeMap = new Map<number, Node>();
    const parentMap = new Map<number, number>();

    for (const node of profile.nodes) {
        nodeMap.set(node.id, node);
        if (node.children) {
            for (const childId of node.children) {
                parentMap.set(childId, node.id);
            }
        }
    }

    function getStack(nodeId: number): string[] {
        const stack: string[] = [];
        let curr: number | undefined = nodeId;
        while (curr !== undefined) {
            const n = nodeMap.get(curr);
            if (!n) break;
            const name = n.callFrame.functionName || "(anonymous)";
            // Strip special markers for clean flamegraph display
            if (name !== "(root)") {
                stack.unshift(name.replace(/;/g, ":"));
            }
            curr = parentMap.get(curr);
        }
        return stack;
    }

    const stackCounts = new Map<string, number>();
    for (const sampleNodeId of profile.samples) {
        const stack = getStack(sampleNodeId);
        if (stack.length > 0) {
            const line = stack.join(";");
            stackCounts.set(line, (stackCounts.get(line) || 0) + 1);
        }
    }

    const lines: string[] = [];
    for (const [stack, count] of stackCounts.entries()) {
        lines.push(`${stack} ${count}`);
    }

    return lines.join("\n");
}

async function main() {
    const rootDir = path.resolve(__dirname, "..");
    const profilePath = path.join(rootDir, "profiles/rate_limiter.cpuprofile");
    const foldedPath = path.join(rootDir, "profiles/rate_limiter.folded");
    const svgPath = path.join(rootDir, "profiles/rate_limiter_flamegraph.svg");
    const flameGraphPl = path.join(rootDir, "tools/FlameGraph/flamegraph.pl");

    console.log("1. Folding stacks from:", profilePath);
    const folded = convertCpuProfileToFolded(profilePath);
    writeFileSync(foldedPath, folded, "utf-8");
    console.log("   Wrote folded stacks to:", foldedPath);

    console.log("2. Generating Brendan Gregg SVG Flame Graph...");
    execSync(`perl "${flameGraphPl}" --title "Distributed Rate Limiter CPU Flame Graph" "${foldedPath}" > "${svgPath}"`);
    console.log("   SVG Flame Graph successfully generated at:", svgPath);
}

main().catch(console.error);
