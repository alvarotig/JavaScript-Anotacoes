/**

 * @param {string} val

 * @return {Object}

 */



class Objeto {

  constructor(a) {

      this.a = a;

  }



  toBe(v) {

    if (this.a == v) {

        return true

    } else {

        throw new Error("Not Equal");

    }

  }



  notToBe(v) {

    if (this.a != v) {

        return true

    } else {

        throw new Error("Equal");

    }

  }

}



var expect = function(val) {

    const objeto = new Objeto(val);

    return objeto;

};



try {

    const result = expect(5).toBe(5);

    console.log(result);

} catch (error) {

    console.error({ error: error.message });

}



try {

    const result = expect(5).notToBe(5);

    console.log(result);

} catch (error) {

    console.error({ error: error.message });

}
