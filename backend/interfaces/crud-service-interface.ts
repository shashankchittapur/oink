export interface ICrudService<T> {
    getAll: () => Promise<T[]>;
    getOne: (id: number) => Promise<T>;
    create: (item: T) => Promise<T>;
    update: (id: number, item: T) => Promise<T>;
    delete: (id: number) => Promise<T>;
}