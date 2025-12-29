/// <reference types="jquery" />

interface JQuery {
  ripples(options: {
    resolution?: number;
    dropRadius?: number;
    perturbance?: number;
    imageUrl?: string;
    interactive?: boolean;
  }): JQuery;
  ripples(method: 'destroy'): JQuery;
  ripples(method: 'drop', x: number, y: number, radius: number, strength: number): JQuery;
}
