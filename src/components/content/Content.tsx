import React from 'react';
import classNames from 'classnames';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './NavBar';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import PostList from '../post/PostList';
import PostDetail from '../post/PostDetail';
import SideBar from '../sidebar/SideBar';

export default () => (
    <Container fluid className="p-0">
      <NavBar/>
      <Row>
        <BrowserRouter>
      <Col xl="8" lg="8" md="8" sm="12" xs="12">
          <Switch>
            <Route exact path="/posts" component={PostList } />
            <Route exact path="/post/:id" component={PostDetail } />
            <Redirect exact from="/" to="posts" />
          </Switch>
      </Col>
      <Col xl="4" lg="4" md="4" sm="12" xs="12">
        <SideBar></SideBar>
      </Col>
        </BrowserRouter>
      </Row>
    </Container>
)