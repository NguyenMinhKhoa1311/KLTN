export function generateUuid(): string {
    const parts: string[] = [
      "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
    ];
  
    for (let i = 0; i < parts.length; i++) {
      parts[i] = parts[i].replace(/[xy]/g, function(c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    }
  
    return parts.join("");
  }