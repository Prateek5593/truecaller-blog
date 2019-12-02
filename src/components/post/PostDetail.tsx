import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './post.detail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import PostService from './post.service';
import { Post } from './post.model';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import Loader from '../common/Loader';
import ErrorDisplay from '../common/ErrorDisplay';

interface Props extends RouteComponentProps {
}

const PostDetail: React.FC<Props> = (props: Props) => {
    const { match: { params } } = props;
    const [post, setPost] = useState<Post | undefined>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>();
    useEffect(() => {
        async function getData() {
            try {
                const promiseArr = [PostService.getPost((params as any).id)]
                const result = await Promise.all(promiseArr);
                setPost(result[0].data);
            } catch (e) {
                setError(e.message);
            }
            setLoading(false);
        }
        getData();
    }, []);
    return (
        <>
            {loading && (
                <Loader />
            )}
            {post && !error && (
                <Container>
                    <Row>
                        <Col xl='12' className='mb-4 pl-4'>
                            <Media src={post.post_thumbnail.URL} className='w-100'></Media>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl='12' className='mb-4 pl-4'>
                            <header className="entry-header mb-4">
                                <div className="entry-meta mb-4">
                                    <span className="cat-links">
                                        <Link to={'/posts?category=' + encodeURIComponent(Object.values(post.categories)[0].slug)} rel="category tag">
                                            {Object.values(post.categories)[0].name}
                                        </Link>
                                    </span>
                                </div>
                                <h1 className="entry-title">{post.title}</h1>
                                <div className="entry-meta">
                                    <span className="entry-date pr-4">
                                        <Link to={`/post/${post.ID}`} rel="bookmark">
                                            <FontAwesomeIcon icon={faClock} />
                                            <time className="entry-date" > {new Date(post.date).toLocaleDateString("en-US")}</time>
                                        </Link>
                                    </span>
                                    <span className="byline">
                                        <span className="author vcard">
                                            <a className="url fn n" href={post.author.profile_URL} rel="author">
                                                <FontAwesomeIcon icon={faUser} /> {post.author.name}
                                            </a>
                                        </span>
                                    </span>
                                </div>
                            </header>
                        </Col>
                    </Row>
                    <Row className="post-content">
                        <Col xl='12' className='mb-4 pl-4'>
                            {ReactHtmlParser(post.content)}
                        </Col>
                    </Row>
                </Container>
            )}
            {error && (
                <ErrorDisplay error={error} />
            )}
        </>
    )
}

export default withRouter(PostDetail);
