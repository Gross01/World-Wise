export const safeObjectValues = (obj) => {
    if (!obj || typeof obj !== "object" || Array.isArray(obj)) {
        return [];
    }
    return Object.values(obj);
};