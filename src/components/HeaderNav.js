import React, { useState } from 'react';
import { Box, Button, Layer, Nav, Anchor, ResponsiveContext } from 'grommet';
import { Menu, Youtube, Instagram } from 'grommet-icons';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Our Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

function HeaderNav() {
  const [showMenu, setShowMenu] = useState(false);
  const size = React.useContext(ResponsiveContext);

  return (
    <Box
      as="header"
      direction="row"
      align="center"
      justify="between"
      wrap
      pad={{ horizontal: size === 'small' ? 'medium' : 'large', vertical: size === 'small' ? 'small' : 'medium' }}
      background="neutral-1"
      elevation="medium"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#222',
        boxShadow: '0 2px 16px rgba(0,0,0,0.18)',
        minHeight: size === 'small' ? 56 : 80,
        flexWrap: 'wrap',
      }}
    >
      {/* Logo and Title */}
      <Box direction="row" align="center" gap="small">
        <Box direction="row" align="center" gap="small">
          <Box
            width="40px"
            height="40px"
            background="brand"
            round="small"
            align="center"
            justify="center"
            style={{ fontWeight: 700, color: '#fff', fontSize: '22px' }}
          >
            {/* Logo Placeholder */}
            <span role="img" aria-label="logo">🔋</span>
          </Box>
          <Box
            style={{
              fontWeight: 900,
              fontSize:
                size === 'small'
                  ? '16px'
                  : window.innerWidth < 800
                  ? '18px'
                  : '28px',
              color: '#00b388',
              letterSpacing: '1px',
              wordBreak: 'break-word',
              maxWidth: '100%',
            }}
          >
            2B POWER HOUSE
          </Box>
        </Box>
      </Box>
      {/* Centered Nav Items */}
      {size !== 'small' ? (
        <Box direction="row" align="center" justify="center" flex style={{ flex: 1 }}>
          <style>{`
            .nav-link-box {
              border-radius: 24px;
              margin: 0 4px;
              cursor: pointer;
              transition: background 0.2s;
              display: flex;
              align-items: center;
              padding: 0;
            }
            .nav-link-text {
              text-decoration: none;
              font-weight: 700;
              font-size: 18px;
              color: #00b388;
              padding: 8px 28px;
              border-radius: 24px;
              display: flex;
              align-items: center;
              transition: color 0.2s;
            }
            .nav-link-box:hover {
              background: #00b388;
            }
            .nav-link-box:hover .nav-link-text {
              color: #fff;
            }
            @media (max-width: 600px) {
              .nav-link-box, .nav-link-text {
                display: none !important;
              }
            }
          `}</style>
          <Nav direction="row" gap="xsmall" align="center" justify="center" style={{ flex: 1 }}>
            {navItems.map((item) => (
              <Box key={item.label} className="nav-link-box">
                <a href={item.href} className="nav-link-text">
                  {item.label}
                </a>
              </Box>
            ))}
          </Nav>
        </Box>
      ) : (
        <Button icon={<Menu color="brand" />} onClick={() => setShowMenu(true)} plain />
      )}
      {/* Social Icons on Right */}
      {size !== 'small' && (
        <Box direction="row" align="center" gap="small" style={{ marginLeft: 16 }}>
          <Anchor
            icon={<Youtube color="#FF0000" size="large" />}
            href="https://youtube.com/"
            label="YouTube"
            color="brand"
            target="_blank"
            className="social-link-custom"
            style={{ margin: 0 }}
          />
          <Anchor
            icon={<Instagram color="#E1306C" />}
            href="https://instagram.com/"
            label="Instagram"
            color="brand"
            target="_blank"
            className="social-link-custom"
            style={{ margin: 0 }}
          />
        </Box>
      )}
      {showMenu && (
        <Layer
          onEsc={() => setShowMenu(false)}
          onClickOutside={() => setShowMenu(false)}
          background="#222"
          modal
          style={{ borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.18)', minWidth: 180, maxWidth: 260, padding: 0 }}
        >
          <Box pad={{ vertical: 'small', horizontal: 'medium' }} gap="small" align="center" background="#222" style={{ borderRadius: 16 }}>
            <Button
              icon={<Menu color="#00b388" />}
              onClick={() => setShowMenu(false)}
              style={{ borderRadius: 8, background: 'none', marginBottom: 4, boxShadow: 'none', minWidth: 36, minHeight: 36 }}
              plain
            />
            <Nav gap="small" align="center">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  color="brand"
                  style={{ fontSize: 16, fontWeight: 700, borderRadius: 8, padding: '8px 18px', width: '100%', background: '#222', color: '#00b388', boxShadow: 'none' }}
                  onClick={() => setShowMenu(false)}
                  plain={false}
                />
              ))}
            </Nav>
          </Box>
        </Layer>
      )}
    </Box>
  );
}

export default HeaderNav;
