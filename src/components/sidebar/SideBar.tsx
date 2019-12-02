import React, { useState, useEffect } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Row, ListGroup, ListGroupItem } from 'reactstrap';
import AppService from '../../app.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sidebar.scss';
import SideBarItem from './SideBarItem';

const SideBar = () => {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    async function getData() {
      const promiseArr = [AppService.getCategories(), AppService.getTags()]
      const result = await Promise.all(promiseArr);
      setCategories(result[0].data.categories);
      setTags(result[1].data.tags);
    }
    getData();
  }, []);
  return (
    <Row className="pl-4 pr-4">
      <SideBarItem data={categories} title="Categories" type="category"/>
      <SideBarItem data={tags} title="Tags" type="tag"/>
    </Row>
  );
}

export default SideBar;