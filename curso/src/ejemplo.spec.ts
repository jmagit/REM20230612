function ConError(param?: any) {
  if(param) return param;
  throw new Error('Esto a fallado')
}
export class Calculadora {
  suma(a: number, b: number) {
    return a + b
  }
  mensaje(msg: string) {
    console.log(msg)
  }
}
xdescribe('Primer ejemplo', () => {
  describe('Dobles de pruebas', () => {
    let calc: Calculadora;
    beforeEach(() => {
      calc = new Calculadora();
    })
    it('Real', () => {
      expect(calc.suma(2, 1)).toBe(3)
    })
    it('Mock', () => {
      spyOn(calc, 'suma').and.returnValue(2)
      expect(calc.suma(2, 4)).toBe(2)
    })
    it('Mock consola', () => {
      spyOn(console, 'log').and.stub()
      const msg = 'hola mundo'
      calc.mensaje(msg)
      expect(console.log).toHaveBeenCalledWith(msg)
    })
  })

  describe('Errores', () => {
    describe('OK', () => {
      [
        {a: 1, rslt: 1},
        {a: '1', rslt: '1'},
      ].forEach(param =>
        it(`Devuelve ${param.a} = ${param.rslt}`, () => {
          expect(ConError(param.a)).toBe(param.rslt)
        })
        )
    })
    describe('KO', () => {
      it('Sin parametro', () => {
        // let rslt = ConError()

        expect(() => ConError()).toThrow()
      })
    })
  })

  describe('Escenario 1', () => {
    beforeEach(function() {
      jasmine.clock().install();
   });

    describe('Escenario 1.1', () => {
      it('Siempre funciona', () => {
        expect(false).toBeTrue()
        pending('a medias')
      })
    })
    it('Pendiente')
    it('asincrono', done => {
      setTimeout(() => {
        expect(true).toBeTrue()
        done()
      }, 1000)
      jasmine.clock().tick(1000)
      jasmine.clock().mockDate(new Date(2001,1,1))
      expect((new Date()).toLocaleDateString()).toBe('1/2/2001')
    }, 500)
  })
  describe('Escenario 2', () => {
    describe('OK', () => {
      [
        {a: 1, b: 2, rslt: 3},
        {a: 1, b: 0, rslt: 1},
        {a: 3, b: -2, rslt: 1},
        {a: 0.1, b: 0.2, rslt: 0.3},
      ].forEach(param =>
        it(`Suma ${param.a} + ${param.b} = ${param.rslt}`, () => {
          expect(param.a + param.b).toBe(param.rslt)
        })
        )
      xit('Todo en uno', () => {
        expect(2+2).toBe(3)
        expect(2-2).toBe(0)
        expect(0.1+0.2).toBe(0.3)
        expect(1 - 0.9).toBe(0.1)
      })
      it('Suma', () => {
        const a = 1, b = 2
        let rslt: number;

        rslt = a + b;

        expect(rslt).toBeDefined()
        //expect(rslt).withContext('Error forzado').toBe(0)
        expect(rslt).toBe(3)
      })
    })
    describe('KO', () => {
      it('Suma', () => {
        const a = 0.1, b = 0.2
        let rslt: number;

        rslt = a + b;

        expect(rslt).toBeCloseTo(0.3, 15)
      })
      it('Resta', () => {
        const a = 1, b = 0.9
        let rslt: number;

        rslt = a - b;

        expect(rslt).toBeCloseTo(0.1, 15)
      })
    })

  })
})
