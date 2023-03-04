import { createSlice } from '@reduxjs/toolkit';
import { ReportSlice } from '../../types/reportTypes';

const initialState: ReportSlice = {
	report: [],
	message: {},
	loading: true,
	error: false, //new line
};

const reportSlice = createSlice({
	name: 'report',
	initialState: initialState,
	reducers: {
		getReportAction: (state) => {
			state.loading = true;
		},
		getReportSuccesed: (state, action) => {
			state.report = action.payload;
			state.loading = false;
			state.error = false; //new line
		},
		getReportFailed: (state, action) => {
			state.message = action.payload;
			state.error = true; //new line
		},
		sendReportAction: (state, action) => {},
		sendReportSuccesed: (state, action) => {
			state.message = action.payload;
		},
		sendReportFailed: (state, action) => {
			state.message = action.payload;
		},
		reportReset: () => {
			return initialState;
		},
	},
});
export const {
	reportReset,
	getReportAction,
	getReportFailed,
	getReportSuccesed,
	sendReportAction,
	sendReportFailed,
	sendReportSuccesed,
} = reportSlice.actions;
export default reportSlice;
