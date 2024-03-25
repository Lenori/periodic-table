export default function groupBlockToCssVar(groupBlock: string) {
    return `--${groupBlock.replaceAll(' ', '-').toLocaleLowerCase()}`;
}
