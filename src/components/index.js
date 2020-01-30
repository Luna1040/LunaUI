import Vue from 'vue'
import Modal from './Modal/index.js'
import Input from './Input/index.js'
import Button from './Button/index.js'
import Badge from './Badge/index.js'
import Card from './Card/index.js'
import Container from './Container/index.js'
import Col from './Grid/Row/index.js'
import Row from './Grid/Col/index.js'

const components = {
    Modal,
    Input,
    Button,
    Badge,
    Card,
    Container,
    Col,
    Row
};

const LunaUI = {
    ...components,
};

Object.keys(LunaUI).forEach(name => {
    Vue.component(name, LunaUI[name])
});

export default LunaUI
