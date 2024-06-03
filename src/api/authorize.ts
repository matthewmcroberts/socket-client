

export function authorize(id: string): Promise<string[]> {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve([]),1000);
    });
}