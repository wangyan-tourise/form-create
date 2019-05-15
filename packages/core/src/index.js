import createFormCreate, {_vue as Vue} from './formCreate';
import Creator, {creatorFactory, creatorTypeFactory} from './factory/creator';
import Handler from './factory/handler';
import makerFactory from './factory/maker';
import Render from './factory/render';
import VData from './factory/vData';
import VNode from './factory/vNode';

export {
    creatorFactory, creatorTypeFactory, Creator,
    Handler, makerFactory, Render, VData, VNode, Vue
}

export default createFormCreate;