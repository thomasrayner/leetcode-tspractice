export function trap(height: number[]): number {
    let trapped = 0;
    if (height.length <= 2) return 0;

    let lMax = new Array(height.length).fill(0);
    let rMax = new Array(height.length).fill(0);

    lMax[0] = height[0];
    rMax[height.length - 1] = height[height.length - 1];

    for (let i = 1; i < height.length; i++) {
        lMax[i] = Math.max(lMax[i - 1], height[i]);
    }

    for (let i = height.length - 2; i >= 0; i--) {
        rMax[i] = Math.max(rMax[i + 1], height[i]);
    }

    for (let i = 0; i < height.length; i++) {
        trapped += Math.min(lMax[i], rMax[i]) - height[i];
    }

    return trapped;
};