import React, { Fragment } from 'react';
import { Anchor, Nav, NavWrap, SubNavWrap, Item } from './grid';
import Svg from './icons';
import Box from './box';
import Transition from 'react-addons-css-transition-group';
const menuItem = [
  {
    id: 1,
    path: '/',
    Name: 'Dashboard',
    exact: true,
  },
  {
    id: 2,
    path: '/contact-management',
    Name: 'Contact Management',
    subMenu: [
      {
        id: 2.1,
        path: '/contact-management/create-contact',
        Name: 'Create Contact',
      },
      {
        id: 2.2,
        path: '/contact-management/import-contact',
        Name: 'Import Contact',
      },
      {
        id: 2.3,
        path: '/contact-management/contact-list',
        Name: 'Contact List',
      },
      {
        id: 2.4,
        path: '/contact-management/group-list',
        Name: 'Group list',
      },
      {
        id: 2.5,
        path: '/contact-management/create-group',
        Name: 'Create Group',
      },
    ],
  },
  {
    id: 3,
    path: '/audio-conference',
    Name: 'Audio Conference',
  },
  {
    id: 4,
    path: '/company-management',
    Name: 'Company Management',
  },
  {
    id: 5,
    path: '/did-management',
    Name: 'DID Management',
  },
  {
    id: 6,
    path: '/message-center',
    Name: 'Message Center',
  },
  {
    id: 8,
    path: '/video-conference',
    Name: 'Video Conference',
    subMenu: [
      {
        id: 8.1,
        path: '/video-conference/create-new-video-conference',
        Name: 'Create New Video Conference',
      },
      {
        id: 8.2,
        path: '/video-conference/conference-list',
        Name: 'Conference List',
      },
      {
        id: 8.3,
        path: '/video-conference/live-conference',
        Name: 'Live Conference',
      },
      {
        id: 8.4,
        path: '/video-conference/edit-conference',
        Name: 'Edit Conference',
      },
    ],
  },
  {
    id: 9,
    path: '/admin-portal',
    Name: 'Admin portal',
  },
];

export class NavbarLight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      color: '',
      subMenu2: false,
      menuIndex: null,
      setActive: [],
      active: [],
    };
    this.closeMenu = this.closeMenu.bind(this);
  }

  subMenu = item => {
    if (item.id !== this.state.show) {
      this.setState({ show: item.id, setActive: [item] }, () => {
        document.removeEventListener('click', this.closeMenu);
        document.addEventListener('click', this.closeMenu);
      });
    } else {
      this.setState({ show: false, setActive: [item] }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }

    // let index = item.id;
    // if (index !== this.state.menuIndex) {
    //   this.setState(
    //     {
    //       show: true,
    //       menuIndex: index,
    //       setActive: [item],
    //     },
    //     () => {
    //       document.removeEventListener('click', this.closeMenu);
    //       document.addEventListener('click', this.closeMenu);
    //     },
    //   );
    // } else {
    //   if (!this.state.eventListner) {
    //     document.addEventListener('click', this.closeMenu);
    //   } else {
    //     document.removeEventListener('click', this.closeMenu);
    //   }
    //   this.setState({ show: !this.state.show, setActive: [item], active: [] });
    // }
  };

  closeMenu(e) {
    if (!this.item.contains(e.target)) {
      this.setState(
        {
          show: false,
        },
        () => {
          document.removeEventListener('click', this.closeMenu);
        },
      );
    }
  }
  menuMove(type) {
    var left = this.menu.scrollLeft;
    if (type) {
      this.menu.scrollLeft = left + 100;
    } else {
      this.menu.scrollLeft = left - 100;
    }
    let state = this.state.setActive;

    this.setState({ active: state });
  }

  menuRender(array) {
    return array.map(item => {
      return (
        <Item
          innerRef={e => (this.item = e)}
          menu-item
          onClick={() => this.subMenu(item)}
          key={item.id}
        >
          <Anchor to={item.path} exact={item.exact} activeClassName="active">
            {item.Name}{' '}
            {item.subMenu && <Box is={Svg} ml="10" icon="down-arrow" />}
          </Anchor>
          <Transition
            transitionName="slide"
            component={Fragment}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {item.subMenu &&
              this.state.show === item.id && (
                <SubNavWrap key={item.id}>
                  {item.subMenu.map(item => (
                    <Item key={item.id}>
                      <Anchor to={item.path} activeClassName="active">
                        {item.Name}
                      </Anchor>
                    </Item>
                  ))}
                </SubNavWrap>
              )}
          </Transition>
        </Item>
      );
    });
  }

  render() {
    const { active } = this.state;
    return (
      <Box is={Nav} flex nowrap>
        {active.length !== 0 && <Box is="ul">{this.menuRender(active)}</Box>}
        <Box
          w="100%"
          innerRef={e => (this.menu = e)}
          css="white-space:nowrap;"
          is={NavWrap}
        >
          {this.menuRender(
            active.length
              ? menuItem.filter(a => a.id !== active[0].id)
              : menuItem,
          )}
        </Box>
        <Box
          w="50"
          flex
          fz="12"
          c="#fff"
          alignItems="center"
          p="5"
          center
          css="box-shadow:inset 1px 0 2px 0 #000;"
        >
          <Box
            w="50%"
            css="cursor:pointer;"
            onClick={() => {
              this.menuMove(true);
            }}
          >
            <Svg icon="left-arrow" />
          </Box>
          <Box
            w="50%"
            css="cursor:pointer;"
            onClick={() => {
              this.menuMove(false);
            }}
          >
            <Svg icon="right-arrow" />
          </Box>
        </Box>
      </Box>
    );
  }
}
