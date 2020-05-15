import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import ASPEditor from "./IDE/editor/ASPEditor";

test('renders learn react link', () => {
	const {getByText} = render(<App/>);
	const linkElement = getByText(/File/i);
	expect(linkElement).toBeInTheDocument();
});

test("prova", () => {
	const a = render(<ASPEditor plugins={[]}/>);

})