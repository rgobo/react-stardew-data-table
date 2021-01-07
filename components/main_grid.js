class MainGrid extends React.Component {
	constructor(props) {
		super(props);
		this.gridData = {};
	}

	render() {
		return e(
			'p',
			null,
			'test',
		);
	}
}

ReactDOM.render(React.createElement(MainGrid), document.querySelector('#main_grid_container'));
