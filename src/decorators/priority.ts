import 'reflect-metadata';

function _definePriority(priority: PriorityValue, target: any) {
    Reflect.defineMetadata('priority', priority, target);
}

export function priorityLowest(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    _definePriority(PriorityValue.LOWEST, target);
}

export function priorityLow(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    _definePriority(PriorityValue.LOW, target);
}

export function priorityNormal(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    _definePriority(PriorityValue.NORMAL, target);
}

export function priorityHigh(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    _definePriority(PriorityValue.HIGH, target);
}

export function priorityHighest(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    _definePriority(PriorityValue.HIGHEST, target);
}

export function priorityMonitor(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    _definePriority(PriorityValue.MONITOR, target);
}

export enum PriorityValue {
    LOWEST = 100,
    LOW = 200,
    NORMAL = 300,
    HIGH = 400,
    HIGHEST = 500,
    MONITOR = 1000,
}
