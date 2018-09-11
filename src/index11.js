import React, { Component } from 'react';
import { ReactDOM, render } from 'react-dom';
import './index.css';
import './style.css';
//import App from './App' ; 
import MapContainer from './components/MapPoly/MapContainer';
import newsApi from './components/Network/newsApi';
// import registerServiceWorker from './registerServiceWorker';


const cachamay = [
  { lat: 8.33414, lng: -62.71554 },
  { lat: 8.33758, lng: -62.71425 },
  { lat: 8.33932, lng: -62.71674 },
  { lat: 8.3465, lng: -62.72111 },
  { lat: 8.3423, lng: -62.74713 },
  { lat: 8.33567, lng: -62.76481 },
  { lat: 8.3359, lng: -62.76882 }, //   Intercecion unare cachamay  rio orinoco
  { lat: 8.31995, lng: -62.75879 }, //
  { lat: 8.2920, lng: -62.7477 }, // Makro  intercepcion unare cacha univer
  { lat: 8.30234, lng: -62.73138 },
  { lat: 8.29908, lng: -62.72012 },
  { lat: 8.30280, lng: -62.7047 }, // parque cachamay
  { lat: 8.30951, lng: -62.6947 },
  { lat: 8.31698, lng: -62.68301 }, // fin este
];
// eslint-disable-next-line no-unused-vars
const universidad = [
  { lat: 8.30671, lng: -62.68439 },
  { lat: 8.30251, lng: -62.67898 },
  { lat: 8.29864, lng: -62.68267 },
  { lat: 8.28463, lng: -62.68868 },
  { lat: 8.28132, lng: -62.70044 },
  { lat: 8.27512, lng: -62.71116 },
  { lat: 8.27134, lng: -62.7181 },
  { lat: 8.26365, lng: -62.7197 },
  { lat: 8.25724, lng: -62.71882 },
  { lat: 8.2495, lng: -62.71734 },
  { lat: 8.24266, lng: -62.72021 },
  { lat: 8.2428, lng: -62.7376 }, // fin unare este rio  intercecio unare universida
  { lat: 8.2497, lng: -62.7363 }, // primera arriba
  { lat: 8.2575, lng: -62.7327 }, // segunda arriba
  { lat: 8.2665, lng: -62.7361 },
  { lat: 8.2734, lng: -62.7368 },
  { lat: 8.2766, lng: -62.73292 }, // mas al este unare
  { lat: 8.2830, lng: -62.7403 },
  { lat: 8.28635, lng: -62.744722 }, // Terminal
  { lat: 8.2920, lng: -62.7477 }, // Makro  intercepcion unare cacha univer
  { lat: 8.30234, lng: -62.73138 },
  { lat: 8.29933, lng: -62.71849 },
  { lat: 8.301, lng: -62.71016 },
  { lat: 8.30121, lng: -62.70698 },
  { lat: 8.3026, lng: -62.7038 },
  { lat: 8.30573, lng: -62.69744 },
  { lat: 8.31106, lng: -62.69014 },
  { lat: 8.31232, lng: -62.68662 },
];
// eslint-disable-next-line no-unused-vars
const unare = [
  { lat: 8.18669, lng: -62.92849 },
  { lat: 8.14567, lng: -62.94733 },
  { lat: 8.12726, lng: -62.90351 },
  { lat: 8.13818, lng: -62.88574 },
  { lat: 8.14255, lng: -62.87364 },
  { lat: 8.14183, lng: -62.86188 },
  { lat: 8.15517, lng: -62.85098 },
  { lat: 8.15474, lng: -62.84695 },
  { lat: 8.16014, lng: -62.84495 },
  { lat: 8.16564, lng: -62.83906 },
  // {lat: 8.17794, lng: -62.84073},
  { lat: 8.1681, lng: -62.82569 },
  { lat: 8.15987, lng: -62.81936 },
  { lat: 8.15911, lng: -62.81372 },
  { lat: 8.16345, lng: -62.80704 },
  { lat: 8.20436, lng: -62.7988 },
  { lat: 8.24161, lng: -62.76808 },
  { lat: 8.2428, lng: -62.7376 }, // fin unare este rio
  { lat: 8.2497, lng: -62.7363 }, // primera arriba
  { lat: 8.2575, lng: -62.7327 }, // segunda arriba
  { lat: 8.2665, lng: -62.7361 },
  { lat: 8.2734, lng: -62.7368 },
  { lat: 8.2766, lng: -62.73292 }, // mas al este unare
  { lat: 8.2830, lng: -62.7403 },
  { lat: 8.28635, lng: -62.744722 }, // Terminal
  { lat: 8.2920, lng: -62.7477 }, // Makro
  { lat: 8.2950, lng: -62.7493 },
  { lat: 8.31995, lng: -62.75879 }, //
  { lat: 8.3359, lng: -62.76882 }, //   Intercecion unare cachamay  rio orinoco
  { lat: 8.32818, lng: -62.80611 },
  { lat: 8.31983, lng: -62.812 },
  { lat: 8.30024, lng: -62.82774 },
  { lat: 8.2839, lng: -62.85211 },
  { lat: 8.2736, lng: -62.86472 },
  { lat: 8.27084, lng: -62.87292 },
  { lat: 8.26599, lng: -62.90106 },
  { lat: 8.27902, lng: -62.94557 },
  { lat: 8.2514, lng: -62.95967 },
  { lat: 8.22581, lng: -62.97256 },
  { lat: 8.21101, lng: -62.95988 },
  { lat: 8.20904, lng: -62.93732 },

];
const dallacosta = [
  { lat: 8.34050, lng: -62.71189 }, // Intercon Puente Angosturita dalla con simon bolivar
  { lat: 8.32598, lng: -62.69794 }, // campo rojo
  { lat: 8.32309, lng: -62.69142 }, // Puente Campo Rojo
  { lat: 8.31902, lng: -62.66601 }, // Puente Macagua
  { lat: 8.31664, lng: -62.65932 },
  { lat: 8.27638, lng: -62.67082 }, // FRENTE AL ITALO
  { lat: 8.25388, lng: -62.70915 }, // Toma de agua toromuerto
  { lat: 8.25000, lng: -62.70915 }, // Fin sur
  { lat: 8.24844, lng: -62.68773 }, // Fin sur 2
  { lat: 8.27859, lng: -62.65760 }, // intermedio
  { lat: 8.28938, lng: -62.63668 }, // Limite yocoima frent a fracisca duarte
  { lat: 8.29201, lng: -62.63701 }, // en via al pao
  { lat: 8.31976, lng: -62.6422 }, // Buen retiro
  { lat: 8.33201, lng: -62.64478 }, // Cementerio semaforo bomba
  { lat: 8.33847, lng: -62.65588 }, // Redoma el dorado
  { lat: 8.34220, lng: -62.67554 }, // Doña Barbara
  { lat: 8.34815, lng: -62.68884 }, //Bomba Borges
];
const simonbolivar = [
  { lat: 8.34815, lng: -62.68884 }, // Bomba Borge
  { lat: 8.34220, lng: -62.67554 }, // Doña Barbara
  { lat: 8.33847, lng: -62.65588 }, // Redoma el dorado
  { lat: 8.34416, lng: -62.65056 }, // alcacranes hidrobolivar
  { lat: 8.36089, lng: -62.64888 }, // mercado el gallo bajando
  { lat: 8.36131, lng: -62.64644 }, // cerro el gallo bajando
  { lat: 8.36522, lng: -62.64287 }, // cerro el gallo
  { lat: 8.36751, lng: -62.64754 }, // batallas pricipal
  { lat: 8.37192, lng: -62.65262 }, // batallas
  { lat: 8.37944, lng: -62.65850 }, // Intercon muelle san felix con 11deabril
  { lat: 8.34891, lng: -62.71605 }, // limite norte
  { lat: 8.34050, lng: -62.71189 }, //Intercon Puente Angosturita dalla con simon bolivar
];
const chirica = [
  { lat: 8.33847, lng: -62.65588 }, // Redoma el dorado
  { lat: 8.34416, lng: -62.65056 }, // alcacranes hidroboliconst
  { lat: 8.36089, lng: -62.64888 }, // mercado el gallo bajando
  { lat: 8.36131, lng: -62.64644 }, // cerro el gallo bajando
  { lat: 8.36522, lng: -62.64287 }, // cerro el gallo
  { lat: 8.36377, lng: -62.63925 }, // cerro el gallo americas
  { lat: 8.36052, lng: -62.63412 }, // once d abri 1 mayoo   BOD
  { lat: 8.32594, lng: -62.62435 }, // entrada a trapichito
  { lat: 8.31562, lng: -62.61726 }, // cruce rosario
  { lat: 8.29859, lng: -62.59852 }, // Limite yocoima este via a upata
  { lat: 8.28657, lng: -62.61219 }, // chirica vieja adentro
  { lat: 8.28938, lng: -62.63668 }, // Limite yocoima frent a fracisca duarte
  { lat: 8.31613, lng: -62.6418 }, // Buen retiro
  { lat: 8.31976, lng: -62.6422 }, // Buen retiro
  { lat: 8.33201, lng: -62.64478 }, //Cementerio semaforo bomba
];
const oncedeabrilCoords = [
  { lat: 8.38712, lng: -62.59117 }, // limite con Vistal sol mas al nort la sierra
  { lat: 8.37873, lng: -62.60672 }, // limite con 5 julio terminal d busetas
  { lat: 8.37723, lng: -62.61652 }, // limite vista al sol 11 de abril
  { lat: 8.36745, lng: -62.61498 }, // curva mas abajo d casa d madera
  { lat: 8.35825, lng: -62.61881 }, // csade madera
  { lat: 8.35504, lng: -62.63239 }, // Villa la manga
  { lat: 8.36114, lng: -62.63457 }, // BOD
  { lat: 8.36522, lng: -62.64287 }, // Villa la manga
  { lat: 8.36751, lng: -62.64754 }, // batallas pricipal
  { lat: 8.37192, lng: -62.65262 }, // batallas
  { lat: 8.37944, lng: -62.65850 }, // Intercon muelle san felix con 11deabril
  { lat: 8.38981, lng: -62.63924 }, //
  { lat: 8.39847, lng: -62.62947 }, // limite norte Rio
  { lat: 8.42508, lng: -62.60854 }, // limite norte Rio Claro
  { lat: 8.38952, lng: -62.53555 }, //limite norte Rio Claro

];
const pozoverde = [
  { lat: 8.25000, lng: -62.70915 }, // Ftrente a Toro Muerto  planta Acueducto
  { lat: 8.24844, lng: -62.68773 }, // Bahia
  { lat: 8.27859, lng: -62.65760 }, // intermedio
  { lat: 8.28938, lng: -62.63668 }, // Limite yocoima frent a fracisca duarte

  { lat: 8.27859, lng: -62.65760 }, // intermedio Interseccion dallacosta
  { lat: 8.28938, lng: -62.63668 }, // Limite yocoima frent a fracisca duarte

  { lat: 8.28921, lng: -62.63651 }, // en via al pao curva 1

  { lat: 8.28708, lng: -62.63408 }, // en via al pao curva 2
  { lat: 8.28369, lng: -62.62915 }, // en via al pao 8.206053440215015,-62.7985382080078

  { lat: 8.27793, lng: -62.62584 }, // en via al pao curva 5
  { lat: 8.27793, lng: -62.62584 }, // en via al pao curva 6
  { lat: 8.25666, lng: -62.62086 }, // en via al pao curva 6
  { lat: 8.23204, lng: -62.61589 }, // en via al pao curva 7
  { lat: 8.16049, lng: -62.6417 }, // Pozo verde
  { lat: 8.15643, lng: -62.79441 }, // Fin sur  Carhuachi
  { lat: 8.20843, lng: -62.77414 }, // Frente Tierra nueva
];
const vistalsolCoords = [
  { lat: 8.31562, lng: -62.61726 }, // cruce rosario mas adelant
  { lat: 8.32495, lng: -62.6150 }, // mas abajos de trapichitoTraíchito
  { lat: 8.33312, lng: -62.60334 }, // Traíchito
  { lat: 8.34212, lng: -62.60198 }, // la  Victoria
  { lat: 8.34543, lng: -62.59855 }, // la  Victoria
  { lat: 8.35384, lng: -62.6057 }, // la  granja
  { lat: 8.36377, lng: -62.6057 }, // limite con 5 julio canal
  { lat: 8.37873, lng: -62.60672 }, // limite con 5 julio terminal d busetas
  { lat: 8.37723, lng: -62.61652 }, // limite con 11 de abril
  { lat: 8.36745, lng: -62.61498 }, // curva mas abajo d casa d madera
  { lat: 8.35825, lng: -62.61881 }, // csade madera
  { lat: 8.35504, lng: -62.63239 }, // Villa la manga
  { lat: 8.32594, lng: -62.62435 }, //entrada a trapichito

];
const yocoima = [
  { lat: 8.28938, lng: -62.63668 }, // Limite yocoima frent a fracisca duarte
  { lat: 8.28708, lng: -62.63408 }, // en via al pao curva 2
  { lat: 8.28369, lng: -62.62915 }, // en via al pao 8.206053440215015,-62.7985382080078
  { lat: 8.27793, lng: -62.62584 }, // en via al pao curva 5
  { lat: 8.25666, lng: -62.62086 }, // en via al pao curva 6
  { lat: 8.23204, lng: -62.61589 }, // en via al pao curva 7
  { lat: 8.16049, lng: -62.6417 }, // Pozo verde
  { lat: 8.22994, lng: -62.50742 }, // Limite norte

  { lat: 8.27541, lng: -62.33053 }, // Limite norte  este
  { lat: 8.35752, lng: -62.47076 }, // limite norte delta amacuro yocoima

  { lat: 8.34543, lng: -62.59855 }, // la  Victoria
  { lat: 8.34212, lng: -62.60198 }, // la  Victoria

  { lat: 8.33312, lng: -62.60334 }, // Traíchito
  { lat: 8.32495, lng: -62.6150 }, // mas abajos de trapichitoTraíchito

  { lat: 8.31562, lng: -62.61726 }, // cruce rosario
  { lat: 8.29859, lng: -62.59852 }, // Limite yocoima este via a upata
  { lat: 8.28657, lng: -62.61219 }, //chirica vieja adentro
];
const cincodejulioCoords = [
  { lat: 8.34543, lng: -62.59855 }, // la  Victoria
  { lat: 8.35384, lng: -62.6057 }, // la  granja
  { lat: 8.36377, lng: -62.6057 }, // limite con 5 julio canal
  { lat: 8.37873, lng: -62.60672 }, // limite con 5 julio terminal d busetas
  { lat: 8.38713, lng: -62.59121 }, // limite con 11 de abril
  { lat: 8.38712, lng: -62.59117 }, // limite con 11 de mas al nort la sierra
  { lat: 8.38952, lng: -62.53555 }, // limite norte delta amacuro 1
  { lat: 8.35752, lng: -62.47076 }, //limite norte delta amacuro yocoima
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      value: 1,
      firstSelect: 0,
      homiPorParroquiasMes: [],
      places: [],
      parroquiasPolygns: [],
      tothomiCachamay: 0,
    };
  }

  async componentWillMount() {
    console.log('First this called');
  }
  async componentDidMount() {
    this.initialFetch();
    this.getData();
  }

  getData() {
    setTimeout(() => {
      console.log('Our data is fetched');
      Object.keys(this.state.homiPorParroquiasMes).map((key) => {
        this.setState.tothomiCachamay = this.state.homiPorParroquiasMes[key].ano_parr_cacha;
        this.setState.tothomiChirica = this.state.homiPorParroquiasMes[key].ano_parr_chi;
        this.setState.tothomiDallaCosta = this.state.homiPorParroquiasMes[key].ano_parr_dalla;
        this.setState.tothomiOncedeAbril = this.state.homiPorParroquiasMes[key].ano_parr_once;
        this.setState.tothomiPozoVerde = this.state.homiPorParroquiasMes[key].ano_parr_pozo;
        this.setState.tothomiSimonBolivar = this.state.homiPorParroquiasMes[key].ano_parr_simon;
        this.setState.tothomiUnare = this.state.homiPorParroquiasMes[key].ano_parr_unare;
        this.setState.tothomiUniversidad = this.state.homiPorParroquiasMes[key].ano_parr_uni;
        this.setState.tothomiVistaAlsol = this.state.homiPorParroquiasMes[key].ano_parr_vista;
        this.setState.tothomiYocoima = this.state.homiPorParroquiasMes[key].ano_parr_yoco;
        // console.log('Homicidios Cachamay = ' + tothomiCachamay);
        return (
          this.state.homiPorParroquiasMes[key].ano_parr_cacha
        );
      });

      this.setState({
        parroquiasPolygns: [
          {
            id: 1,
            name: 'cachamay',
            data: cachamay,
            style: { fillColor: '#F44336', fillOpacity: '0.35', strokeColor: '#F44336', strokeOpacity: '0.8', strokeWeight: '3' },
          },
          {
            id: 2,
            name: 'unare',
            data: unare,
            style: { fillColor: 'green', fillOpacity: '0.35', strokeColor: 'green', strokeOpacity: '0.8', strokeWeight: '3' },
          },
          {
            id: 3,
            name: 'universidad',
            data: universidad,
            style: { fillColor: '#FFEB3B', fillOpacity: '0.35', strokeColor: '#FFEB3B', strokeOpacity: '0.8', strokeWeight: '3' },
          },
          {
            id: 4,
            name: 'dallacosta',
            data: dallacosta,
            style: { fillColor: '#663399', fillOpacity: '0.35', strokeColor: '#663399', strokeOpacity: '0.8', strokeWeight: '3' },
          },
          {
            id: 5,
            name: 'simonbolivar',
            data: simonbolivar,
            style: { fillColor: '#22A7F0', fillOpacity: '0.35', strokeColor: '#22A7F0', strokeOpacity: '0.8', strokeWeight: '3' },
          },
          {
            id: 6,
            name: 'chirica',
            data: chirica,
            style: { fillColor: '#F9690E', fillOpacity: '0.35', strokeColor: '#F9690E', strokeOpacity: '0.8', strokeWeight: '3' },
          },
          {
            id: 7,
            name: 'pozoverde',
            data: pozoverde,
            style: { fillColor: '#F9690E', fillOpacity: '0.35', strokeColor: '#F9690E', strokeOpacity: '0.8', strokeWeight: '3' },
          },
          {
            id: 8,
            name: 'vistalsolCoords',
            data: vistalsolCoords,
            style: { fillColor: '#F9690E', fillOpacity: '0.35', strokeColor: '#F9690E', strokeOpacity: '0.8', strokeWeight: '3' },
          },
          {
            id: 9,
            name: 'oncedeabrilCoords',
            data: oncedeabrilCoords,
            style: { fillColor: '#F9690E', fillOpacity: '0.35', strokeColor: '#F9690E', strokeOpacity: '0.8', strokeWeight: '3' },
          },
          {
            id: 10,
            name: 'yocoima',
            data: yocoima,
            style: { fillColor: '#F9690E', fillOpacity: '0.35', strokeColor: '#F9690E', strokeOpacity: '0.8', strokeWeight: '3' },
          },
          {
            id: 11,
            name: 'cincodejulioCoords',
            data: cincodejulioCoords,
            style: { fillColor: '#F9690E', fillOpacity: '0.35', strokeColor: '#F9690E', strokeOpacity: '0.8', strokeWeight: '3' },
          },
        ],
        places: [
          {
            name: 'Cachamay',
            title: 'Cachamay',
            homicidios: this.setState.tothomiCachamay,
            position: { lat: 8.310839, lng: -62.726316 },
          },
          {
            name: 'Chirica',
            title: 'Chirica',
            homicidios: this.setState.tothomiChirica,
            position: { lat: 8.32080042232, lng: -62.63884948730 },
          },
          {
            name: 'Dalla Costa',
            title: 'Dalla Costa',
            homicidios: this.setState.tothomiDallaCosta,
            position: { lat: 8.33, lng: -62.694726715 },
          },
          {
            name: 'Once de Abril',
            title: 'Once de Abril',
            homicidios: this.setState.tothomiOncedeAbril,
            position: { lat: 8.3603954392, lng: -62.62794971466 },
          },
          {
            name: 'Pozo Verde',
            title: 'Pozo Verde',
            homicidios: this.setState.tothomiPozoVerde,
            position: { lat: 8.259059870475873, lng: -62.62533187866211 },
          },
          {
            name: 'Simon Bolivar',
            title: 'Simom Bolivar',
            homicidios: this.setState.tothomiSimonBolivar,
            position: { lat: 8.35955288448, lng: -62.6670885086 },
          },
          {
            name: 'Unare',
            title: 'Unare',
            homicidios: this.setState.tothomiUnare,
            position: { lat: 8.2677449421, lng: -62.773518 },
          },
          {
            name: 'Universidad',
            title: 'Universidad',
            homicidios: this.setState.tothomiUniversidad,
            position: { lat: 8.27232165765, lng: -62.72884368896 },
          },
          {
            name: 'VistaAlsol',
            title: 'VistaAlsol',
            homicidios: this.setState.tothomiVistaAlsol,
            position: { lat: 8.3355111123, lng: -62.6166200637 },
          },
          {
            name: 'Yocoima',
            title: 'Yocoima',
            homicidios: this.setState.tothomiYocoima,
            position: { lat: 8.27969987463, lng: -62.56404876708 },
          },
        ],

      });
    }, 1000);
  }


  // eslint-disable-next-line consistent-return
  async initialFetch() {
    if (!this.state.homiPorParroquiasMes) return this.setState({ loading: false });
    const homiPorParroquiasMes = await newsApi.getPorParroquiasMes();

    // console.log(homiPorParroquiasMes);
    this.setState({
      homiPorParroquiasMes,
      loading: false,

    });
    // console.log(this.state.homiPorParroquiasMes[0]);
  }

  render() {
    return (

      <MapContainer places={this.state.places} parroquiasPolygns={this.state.parroquiasPolygns} />
    );
  }
}


render(<App />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();