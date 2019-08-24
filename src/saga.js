import { all } from 'redux-saga/effects';
import imageSaga from './modules/Image/saga';

export default function*(){
    yield all([imageSaga()])
}