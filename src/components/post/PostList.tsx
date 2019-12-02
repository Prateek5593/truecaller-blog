import React, { useEffect, useState } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, CardDeck, Container, Row, Col, Button } from 'reactstrap'
import ReactHtmlParser from 'react-html-parser';
import PostService from './post.service';
import TimeAgo from '../time-ago/TimeAgo';
import { Post } from './post.model';
import './post.list.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getQueryParams } from '../../helpers/util';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import ErrorDisplay from '../common/ErrorDisplay';
import Loader from '../common/Loader';

interface Props extends RouteComponentProps {
}

const PostList: React.FC<Props> = (props) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>();
    const [page, setPage] = useState(1);
    const { history } = props;
    const { location } = history;

    useEffect(() => {
        const params = getQueryParams(location.search);
        async function getData() {
            try {
                const result = await PostService.getPosts(1, params);
                setPosts(result.data.posts);
                setPage(1);
            } catch (e) {
                setError(e.message);
            }
            setLoading(false);
        }
        getData();
    }, [location.search]);

    const handleClick = async () => {
        const params = getQueryParams(location.search);
        const result = await PostService.getPosts(page + 1, params);
        setPosts([...posts, ...result.data.posts]);
        setPage(page + 1);
    }

    return (
        <Container>
            <Row>
                <ErrorBoundary message="Unable to load posts.">
                    {loading && (
                        <Loader />
                    )}
                    {!error && !loading && (<>
                    <Col lg='12' md='12' sm='12'>
                        <CardDeck >
                            {posts.map((post: Post) => {
                                return (<Card key={post.ID} className="mb-4 cursor-pointer" style={{ minWidth: '18rem' }} onClick={() => { history.push(`/post/${post.ID}`) }}>
                                    {post.post_thumbnail && <CardImg top width="100%" src={post.post_thumbnail.URL} alt="Card image cap" />}
                                    <CardBody>
                                        <CardTitle>{post.title}</CardTitle>
                                        <CardText>{ReactHtmlParser(post.excerpt)}</CardText>
                                        <CardText>
                                            <small className="text-muted"><TimeAgo time={post.modified} /></small>
                                        </CardText>
                                    </CardBody>
                                </Card>)
                            })}
                        </CardDeck>
                    </Col>
                    <Col lg='12' md='12' sm='12' className="text-right mb-4">
                        <Button className="btn btn-info" onClick={handleClick}>Older Posts</Button>
                    </Col> </>)}
                    
                    {error && (
                        <ErrorDisplay error={error} />
                    )}
                </ErrorBoundary>
            </Row>
        </Container>
    )
}

export default withRouter(PostList);
