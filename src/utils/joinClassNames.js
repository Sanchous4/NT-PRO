export default function cx(...args) {
    return args.map((arg) => arg?.toString()).join(' ');
}
