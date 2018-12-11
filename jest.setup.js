// Сделаем функции Enzyme доступными во всех файлах тестов без необходимости импорта importing
// import raf from './tempPolyfills';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'whatwg-fetch';

Enzyme.configure({ adapter: new Adapter() })

global.shallow = shallow;
global.render = render;
global.mount = mount;
// Обрушим тест при любой ошибке
console.error = (message) => {
  throw new Error(message);
};
