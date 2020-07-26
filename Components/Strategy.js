class Strategy {
  constructor(howToSort) {
      this.howToSort = howToSort;
  }
  sortGreater(lista){}
  sortLower(lista){}
}


class KmStrategy extends Strategy{
  constructor(howToSort){
    super(howToSort);
  }
  sortGreater(lista){
    return lista.sort(function(a,b) { return b.kilometros - a.kilometros });
  }
  sortLower(lista){
      return lista.sort(function(a,b) { return a.kilometros - b.kilometros });
    }
}

class YearStrategy extends Strategy{
  constructor(howToSort){
    super(howToSort);
  }
  sortGreater(lista){
    return lista.sort(function(a,b) { return b.anio - a.anio });
  }
  sortLower(lista){
      return lista.sort(function(a,b) { return a.anio - b.anio });
    }
}

class PriceStrategy extends Strategy{
  constructor(howToSort){
    super(howToSort);
  }
  sortGreater(lista){
    return lista.sort(function(a,b) { return b.precio - a.precio });
  }
  sortLower(lista){
      return lista.sort(function(a,b) { return a.precio - b.precio });
    }
}