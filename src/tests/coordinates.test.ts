//Lo primero que vamos a implementar es el artefacto coordenadas
//que va a ser un value object que va a tener dos atributos que siempre van juntos, la latitud y longitud
// y que va a comprobar si está en el borde del planeta o no, si está en el borde del planeta lo rodea
//no se permiten coordenadas negativas.

import { Coordinates } from "../core/coordinates";

describe('The Coordinates', () => {
  it('does not allow negative values for latitude', () => {
    expect(() => Coordinates.create(-1, 0)).toThrow('Negative values are not allowed');
  });

  it('does not allow negative values for longitud', () => {
    expect(() => Coordinates.create(-1, 0)).toThrow('Negative values are not allowed');
  });

  it('wraps around latitude when reaching boundary', ()=>{
    const coordinates = Coordinates.create(10,9);

    expect(coordinates).toEqual(Coordinates.create(0,9));
  });

  it('wraps around longitude when reaching boundary', ()=>{
    const coordinates = Coordinates.create(9,10);

    expect(coordinates).toEqual(Coordinates.create(9,0));
  });

  it('increases the latitude by one', () => {
    const coordinates = Coordinates.create(0, 0);

    const newCoordinates = coordinates.increaseLatitude();

    expect(newCoordinates.toEqual(Coordinates.create(1, 0))).toBe(true);
  });

  it('starts the latitude from zero when it reaches the boundary', () => {
    const coordinates = Coordinates.create(9, 9);

    const newCoordinates = coordinates.increaseLatitude();

    expect(newCoordinates.toEqual(Coordinates.create(0, 9))).toBe(true);
  });

  it('starts the longitude from zero when it reaches the boundary', () => {
    const coordinates = Coordinates.create(9, 9);

    const newCoordinates = coordinates.increaseLongitude();

    expect(newCoordinates.toEqual(Coordinates.create(9, 0))).toBe(true);
  });

  it('decreases the latitude by one', () => {
    const coordinates = Coordinates.create(1, 0);

    const newCoordinates = coordinates.decreaseLatitude();

    expect(newCoordinates.toEqual(Coordinates.create(0, 0))).toBe(true);
  });

  it('decrease  the longitude by one', () => {
    const coordinates = Coordinates.create(0, 1);

    const newCoordinates = coordinates.decreaseLongitude();

    expect(newCoordinates.toEqual(Coordinates.create(0, 0))).toBe(true);
  });

  it('starts the latitude from zero when it reaches the boundary (decreasing)', () => {
    const coordinates = Coordinates.create(0, 0);

    const newCoordinates = coordinates.decreaseLatitude();

    expect(newCoordinates.toEqual(Coordinates.create(9, 0))).toBe(true);
  });

  it('starts the longitude from zero when it reaches the boundary (decreasing)', () => {
    const coordinates = Coordinates.create(0, 0);

    const newCoordinates = coordinates.decreaseLongitude();

    expect(newCoordinates.toEqual(Coordinates.create(0, 9))).toBe(true);
  });


});
