import Collapsible from 'react-collapsible';

const FaqItems = (props) => {
    return (
        <Collapsible trigger={props.question}>
            <p>{props.answer}</p>
        </Collapsible>
    );
}

export default FaqItems;