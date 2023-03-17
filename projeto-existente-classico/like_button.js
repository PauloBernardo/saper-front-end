'use strict';

const e = React.createElement;
class LikeButton extends React.Component {
    render() {

        return e(
            'button',
            { onClick: () => alert("Gostei!!"), className: "btn btn-success" },
            'Like'
        );
    }
}
