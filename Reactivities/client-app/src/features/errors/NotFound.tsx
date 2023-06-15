import { Link } from "react-router-dom";
import { Button, Header, Icon, Placeholder, Segment } from "semantic-ui-react";

export default function NotFound() {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                Ooops - We looked everywhere but could not find what you are looking for!
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities'>
                    Return to activities page
                </Button>
            </Segment.Inline>
        </Segment>
    )
}