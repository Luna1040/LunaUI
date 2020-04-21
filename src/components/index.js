import Vue from 'vue'
import Modal from './Modal/index.js'
import Button from './Button/index.js'
import Input from './Input/index.js'
import Badge from './Badge/index.js'
import Row from './Grid/Row/index.js'
import Col from './Grid/Col/index.js'
import Container from './Container/index.js'
import Card from './Card/index.js'
import Table from './Table/Table.vue'
import Page from './Table/Page.vue'
import List from './List/List.vue'
import ListItem from './List/ListItem.vue'
import Form from './Form/Form.vue'
import Select from './Select/Select.vue'
import Option from './Select/Option.vue'
import Message from './Message/index.js'
import './util/clickoutside'

const LunaUI = {
    Modal,
    Button,
    Input,
    Badge,
    Row,
    Col,
    Container,
    Card,
    Table,
    Page,
    List,
    ListItem,
    Form,
    FormItem,
    Select,
    Option
}

Object.keys(LunaUI).forEach(name => {
    Vue.component(name, LunaUI[name])
})

Vue.prototype.$Message = Message

export default LunaUI
