function ConError(param?: any) {
  if(param) return param;
  throw new Error('Esto a fallado')
}

fdescribe('Primer ejemplo', () => {
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
    describe('Escenario 1.1', () => {
      it('Siempre funciona', () => {
        expect(false).toBeTrue()
        pending('a medias')
      })
    })
    it('Pendiente')
    fit('asincrono', done => {
      setTimeout(() => {
        expect(true).toBeTrue()
        done()
      }, 1000)
    }, 5000)
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
