import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { ListGroup, ListGroupItem, Collapse } from 'reactstrap';
import { RouteComponentProps, NavLink, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps {
    data: any;
    title: string;
    type: string;
}

const SideBarItem: React.FC<Props> = (props) => {
    const [open, setOpen] = useState(true);
    const {data, title, type} = props;

    const handleClick = (e: any) => {
        e.stopPropagation();
        setOpen(!open);
    }

    return (
      <section className="mb-4 w-100">
      <header className="widget-title pr-2 pl-2" onClick={handleClick}>{title}
        { open ? <FontAwesomeIcon icon={faMinus} style={{ float: "right" }} /> : <FontAwesomeIcon icon={faPlus} style={{ float: "right" }} />}
      </header>
      <Collapse isOpen={open}>
        <ListGroup flush>
            {data.map((item: any) => {
            return (<ListGroupItem tag="li" key={item.ID} className="widget-items">
                <NavLink to={{ pathname: `/posts`, search: `${type}=${item.slug}` }} rel="category tag">
                {item.name}
                            </NavLink>
            </ListGroupItem>);
            })}
        </ListGroup>
      </Collapse>
    </section>
    )
}

export default withRouter(SideBarItem);
