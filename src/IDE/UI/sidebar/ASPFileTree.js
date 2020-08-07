import React, {useEffect, useState} from "react";
import {decorators, Treebeard} from 'react-treebeard';
import {useDispatch, useSelector} from "react-redux";
import {
	editorValue,
	reloadAsync,
	setActiveFile,
	setActiveProject,
	setMultiples,
	setNewProjects
} from "../../../redux/actions";
import {ContextMenu, ContextMenuTrigger, MenuItem} from "react-contextmenu";
import ModalRename from "../modals/ModalRename";

class Container extends decorators.Container {
	render() {
		return (
			<div>
				<ContextMenuTrigger id="leftContextMenu" collect={props => props} holdToDisplay={-1}
				                    node={this.props.node}>
					{super.render()}
				</ContextMenuTrigger>
			</div>
		);
	}
}


const ASPFileTree = ({size, notifyTree, sendProgram}) => {
	const projects = useSelector(state => state.projects);
	const dispatch = useDispatch();
	const activeProject = useSelector(state => state.activeProject)
	const activeFile = useSelector(state => state.activeFile)
	const [cursor, setCursor] = useState({})
	const [clicked, setClicked] = useState({})
	const keyboardEvent = useSelector(state => state.keyBoardEvent)
	const [, reRenderMe] = useState(0)
	const [multiple, setMultiple] = useState([])
	useEffect(() => {
		dispatch(reloadAsync())
		if (activeProject.active !== undefined) {
			activeProject.active = true
		}
		setCursor(activeProject)

	}, [notifyTree])

	function onSelect(node, toggled) {
		if (keyboardEvent && activeFile.name !== node.name) {
			node.active = true;
			let a = Object.assign([], multiple)
			if (a.includes(node)) {
				node.active = false
				a.filter(n => n.name !== node.name)
				dispatch(setMultiples(a))
			} else {
				a.push(node)
				dispatch(setMultiples(a))
			}
			setMultiple(a)
		} else {
			multiple.forEach(n => n.active = false)
			setMultiple([])
			dispatch(setMultiples([]))
			if (cursor) {
				cursor.active = false;
			}
			node.active = true;
			if (node.children) {
				node.toggled = toggled;
				dispatch(setActiveProject(node))
			} else {
				let father = projects.filter(f => f.id === node.father);
				dispatch(setActiveProject(father[0]))
				dispatch(setActiveFile(node))
				dispatch(editorValue(node.inputProgram))
			}
			setCursor(node);
			dispatch(setNewProjects(projects))
			reRenderMe(n => !n)
		}
	}

	const onDelete = () => {
		let url = `api/projects/${clicked.id}/delete`
		if (clicked.children === undefined)
			url = `api/projects/${clicked.father}/delete/${clicked.name}`;
		fetch(url).then(r => {
			dispatch(reloadAsync())
			reRenderMe(n => !n)
		})
	}

	return (
		<span>
			<Treebeard data={projects} onToggle={onSelect} style={{
				tree: {
					base: {
						height: "100%",
						width: "100%",
						position: "absolute"
					}
				},

			}} decorators={{...decorators, Container}}/>
			<ContextMenu id={"leftContextMenu"} hideOnLeave collect={props => props}
			             onShow={(e) => setClicked(e.detail.data.node)}>
				<ModalRename clicked={clicked} projects={projects} reRender={reRenderMe}/>
				<MenuItem onClick={() => onDelete()}>
					Delete
				</MenuItem>
				{clicked.children === undefined && <MenuItem onClick={sendProgram}>
					Execute
				</MenuItem>}
			</ContextMenu>
		</span>
	)
};

export default ASPFileTree;