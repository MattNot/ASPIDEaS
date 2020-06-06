import React from "react";
import Tree from "@naisutech/react-tree"


const ASPFileTree = ({size}) => {
	return (
		<Tree nodes={[{
			id: 123,
			parentId: null,
			label: "Prova project",
			items: [
				{
					"id": 87654321,
					"label": "File in project root",
					"parentId": 12345678,
				}
			]
		},
			{
				id: 321,
				parentId: 123,
				label: "Prova sub-cartella",
				items: [{
					id: 314,
					label: "File in sub",
					parentId: 321
				}]
			}]} size={size === undefined ? "full" : size}/>
	)
};

export default ASPFileTree;