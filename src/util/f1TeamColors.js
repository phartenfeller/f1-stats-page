/* 
I darkened some, to make them more readable

sources: 
https://www.reddit.com/r/formula1/comments/lfpyfp/f1_2021_team_colors_hex_codes/
https://www.reddit.com/r/formula1/comments/arxt0r/f1_2019_team_colors_hex_codes/
https://www.reddit.com/r/formula1/comments/4v9t9f/f1_team_color_hex_codes/
*/

const NO_COLOR_FOUND = '#C9D1D2';

const colors = {
  McLaren: '#FF8700',
  AlphaTauri: '#2B4562',
  Williams: '#005AFF',
  'Alpine F1 Team': '#0090FF',
  'Red Bull': '#0600EF',
  Ferrari: '#DC0000',
  Mercedes: '#00D2BE',
  'Alfa Romeo': '#900000',
  'Haas F1 Team': '	#000000',
  'Aston Martin': '#006F62',
  Renault: '#e6c317',
  'Racing Point': '#F596C8',
  'Manor Marussia': '#323232',
  Sauber: '#006EFF',
  'Force India': '#FF5F0F',
  'Toro Rosso': '#0000FF',
  Virgin: '#cc0000',
  HRT: '#A6904F',
  Jordan: '#CCCC00',
  Minardi: '#E9C010',
  Toyota: '#E71837',
  Jaguar: '#004225',
  Arrows: '#CF6304',
  Prost: '#0B1740',
  Benetton: '#008860',
  BAR: '#B7082F',
  'Talbot-Lago': '#4C60B7',
  'Kurtis Kraft': '#D30027',
  Maserati: '#CE251A',
  Pawl: NO_COLOR_FOUND,
  Alta: '#184836',
  Simca: '#0260B8',
  Deidt: NO_COLOR_FOUND,
  ERA: NO_COLOR_FOUND,
  OSCA: '#AC2337',
  Veritas: '#ADA8B2',
  BMW: '#010053',
  Adams: NO_COLOR_FOUND,
  Watson: NO_COLOR_FOUND,
  Snowberger: '#38577A',
  Wetteroth: '#FF6D28',
  Olson: NO_COLOR_FOUND,
  Rae: NO_COLOR_FOUND,
  Ewing: NO_COLOR_FOUND,
  Langley: NO_COLOR_FOUND,
  Lesovsky: '#C24C1F',
  Stevens: NO_COLOR_FOUND,
  Marchese: NO_COLOR_FOUND,
  Nichels: '#575467',
  Moore: '#215AC1',
  Cooper: '#374C2F',
  BRM: '#8D2B1C',
  Trevis: NO_COLOR_FOUND,
  Bromme: NO_COLOR_FOUND,
  Schroeder: NO_COLOR_FOUND,
  Hall: NO_COLOR_FOUND,
  Kuzma: NO_COLOR_FOUND,
  Sherman: NO_COLOR_FOUND,
  HWM: '#76BFB9',
  Cisitalia: '#F31141',
  AFM: NO_COLOR_FOUND,
  'Aston Butterworth': '#2B2B2B',
  'Frazer Nash': '#F31141',
  Connaught: '#21282C',
  Gordini: '#3C92E6',
  EMW: NO_COLOR_FOUND,
  Klenk: NO_COLOR_FOUND,
  Vanwall: '#16403A',
  Pankratz: NO_COLOR_FOUND,
  Phillips: NO_COLOR_FOUND,
  'Arzani-Volpini': '#1A856A',
  Epperly: '#FFF389',
  Lancia: '#D24550',
  Porsche: '#D9D6DD',
  Lotus: '#FFB800',
  'Team Lotus': '#FFB800',
  'Lotus-Climax': '#FFB800',
  'Lotus-Maserati': '#FFB800',
  'Lotus-Borgward': '#FFB800',
  'Lotus-BRM': '#FFB800',
  'Lotus-Ford': '#FFB800',
  'Cooper-Borgward': '#133131',
  'Cooper-OSCA': '#133131',
  'Cooper-Maserati': '#133131',
  'Cooper-Climax': '#133131',
  'Cooper-Castellotti': '#133131',
  'Cooper-Alfa Romeo': '#133131',
  'Cooper-Ford': '#133131',
  Fry: NO_COLOR_FOUND,
  JBW: '#333D3C',
  Christensen: NO_COLOR_FOUND,
  Sutton: NO_COLOR_FOUND,
  'Behra-Porsche': '#016EA5',
  Turner: '#2F5953',
  Emeryson: '#F7D502',
  Dunn: NO_COLOR_FOUND,
  Elder: NO_COLOR_FOUND,
  Meskowski: NO_COLOR_FOUND,
  Scarab: '#0078C6',
  'De Tomaso': '#E83801',
  'De Tomaso-Osca': '#E83801',
  'De Tomaso-Alfa Romeo': '#E83801',
  'De Tomaso-Ferrari': '#E83801',
  Ferguson: '#133B6A',
  MBM: NO_COLOR_FOUND,
  Gilby: '#255B66',
  ENB: '#E0BE30',
  Honda: '#CD0000',
  Brabham: '#167018',
  'Brabham-Repco': '#167018',
  'Brabham-Climax': '#167018',
  'Brabham-Ford': '#167018',
  'Brabham-BRM': '#167018',
  'BMW Sauber': '#0D1E60',
  Spyker: '#FF6D01',
  Brawn: '#E4F74E',
  'Super Aguri': '#CD3A41',
  MF1: '#FF352E',
  Tyrrell: '#001DDC',
  Stewart: '#052554',
  Ligier: '#0168CB',
  Footwork: '#D72813',
  Forti: '#F9E545',
  Pacific: '#EA0E95',
  Simtek: '#48258C',
  Lola: '#FAAD0D',
  Larrousse: '#203D6F',
  LDS: '#024F30',
  'LDS-Alfa Romeo': '#024F30',
  'LDS-Climax': '#024F30',
  Stebro: '#000000',
  Scirocco: '#083F5B',
  ATS: '#EEDF00',
  Derrington: '#AE3325',
  BRP: '#CAFFCE',
  RE: NO_COLOR_FOUND,
};

function getTeamColor(team) {
  if (colors[team]) {
    return colors[team];
  }
  // eslint-disable-next-line no-console
  console.warn(`Unknown team => "${team}". Using fallback color`);
  return '#374151'; // neutral gray
}

export default getTeamColor;
