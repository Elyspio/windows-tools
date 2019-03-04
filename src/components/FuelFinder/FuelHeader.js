import PropTypes from 'prop-types'
import React, {Component} from 'react';
import {Action} from "../../redux/Action";
import {connect} from "react-redux";
import {FuelFinder} from "./FuelFinder";

class FuelHeader extends Component {


	static propTypes = {
		sorter: PropTypes.string.isRequired,
		className: PropTypes.string
	}

	constructor(props) {
		super(props);
		this.state = {
			isSorter: this.props.sorter === this.props.fuelSetting.sortBy
		}


	}

	changeSortOrField = (sort) => {
		if (this.props.sorter !== this.props.fuelSetting.sortBy) {
			this.props.changeSorter(sort);
		} else {
			if (this.props.fuelSetting.order === FuelFinder.settings.order.asc) {
				this.props.reorder(FuelFinder.settings.order.dsc)
			} else {
				this.props.reorder(FuelFinder.settings.order.asc)

			}
		}
	};

	componentWillReceiveProps(nextProps, nextContext) {
		if (this.props.fuelSetting.sortBy !== nextProps.fuelSetting.sortBy) {
			this.setState(prev => ({
				...prev,
				isSorter: this.props.sorter === nextProps.fuelSetting.sortBy
			}));
		}
	}

	render() {
		return (
			<p onClick={() => this.changeSortOrField(this.props.sorter)}
			   className={this.props.className + ` ${this.state.isSorter ? "sorter" : ""}`}>{this.props.children}</p>

		);
	}
}

const mapStateToProps = (state) => ({
	fuelSetting: state.fuelSetting
});

const mapDispatchToProps = (dispatch) => ({


	changeSorter: (sorter) => {
		dispatch({
			type: Action.FUEL_FINDER.CHANGE_SORTER.TYPE,
			payload: sorter
		})
	},

	reorder: (order) => {
		dispatch({
			type: Action.FUEL_FINDER.REORDER.TYPE,
			payload: order,
		})
	},

});


export default connect(mapStateToProps, mapDispatchToProps)(FuelHeader);
