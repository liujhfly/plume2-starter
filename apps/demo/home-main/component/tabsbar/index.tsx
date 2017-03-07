import * as React from 'react'
import { StoreProvider, Relax } from 'plume2'
import { AppBar, Link, Navigation, CardMedia, Tabs, Tab } from 'react-toolbox'

import ListView from '../listview'
import VirtualListView from '../virtual-listview'
import PullRefreshList from '../pull-refresh-list'

export default class TabsBar extends React.Component<any, any>
{
    state = {
        index: 1
    };

    handleTabChange = (index) => {
        this.setState({ index });
    }

    handleActive = () => {
        if (__DEV__) {
            console.log("TabsBar handleActive");
        }
    }

    render() {
        return (
            <Tabs index={this.state.index} onChange={this.handleTabChange} fixed>
                <Tab label='精选' onActive={this.handleActive}>
                    <div>react-toolbox listview</div>
                    <ListView />
                </Tab>
                <Tab label='动态' onActive={this.handleActive}>
                    <div>preact virtual-list</div>
                    <VirtualListView />
                </Tab>
                <Tab label='原创' onActive={this.handleActive}>
                    <div>rc-list-view</div>
                    <PullRefreshList />
                </Tab>
            </Tabs>
        );
    }
}