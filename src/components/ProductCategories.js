import React from 'react';
import { Box, Card, CardBody, CardHeader, Text, Grid, Image } from 'grommet';
import { Storage, Test, Workshop } from 'grommet-icons';
import elfLogo from '../assets/elf-logo.svg';
import castrolLogo from '../assets/castrol-logo.svg';
import motulLogo from '../assets/motul-logo.svg';
import wd40Logo from '../assets/wd-40-logo.svg';
import lmLogo from '../assets/liqui-moly-logo.svg';

const batteryBrands = [
  {
    name: 'Amaron',
    logo: require('../assets/amaron-logo.png'),
    desc: 'Premium batteries for vehicles & inverters.',
  },
  {
    name: 'Powerzone',
    logo: require('../assets/powerzone-logo.png'),
    desc: 'Reliable batteries for all needs.',
  },
  {
    name: 'Elito',
    logo: require('../assets/elito-logo.png'),
    desc: 'Quality batteries for every use.',
  },
];

const lubeBrands = [
  {
    name: 'Amaron Lubes',
    logo: require('../assets/amaron-lubes-logo.png'),
    desc: 'Ultimate performance and protection.',
  },
  {
    name: 'Elf',
    logo: elfLogo,
    desc: 'High-performance engine oils.',
  },
  {
    name: 'Castrol',
    logo: castrolLogo,
    desc: 'Trusted lubricants for all engines.',
  },
  {
    name: 'Motul',
    logo: motulLogo,
    desc: 'Advanced oils for superior protection.',
  },
  {
    name: 'Liqui Moly',
    logo: lmLogo,
    desc: 'Advanced oils for superior protection.',
  },
  {
    name: 'WD-40',
    logo: wd40Logo,
    desc: 'The all-in-one shield for your machines.',
  },
];

function getCenteredGridItems(items, columns) {
  const rows = Math.ceil(items.length / columns);
  const lastRowCount = items.length % columns || columns;
  const spacers = columns - lastRowCount;
  const gridItems = [];
  for (let r = 0; r < rows; r++) {
    const start = r * columns;
    const end = start + columns;
    const rowItems = items.slice(start, end);
    if (r === rows - 1 && spacers && lastRowCount !== columns) {
      // Add spacers before and after last row
      for (let i = 0; i < Math.floor(spacers / 2); i++) {
        gridItems.push(<Box key={`spacer-left-${i}`} />);
      }
      rowItems.forEach((item) => gridItems.push(item));
      for (let i = 0; i < Math.ceil(spacers / 2); i++) {
        gridItems.push(<Box key={`spacer-right-${i}`} />);
      }
    } else {
      rowItems.forEach((item) => gridItems.push(item));
    }
  }
  return gridItems;
}

function getBrandColor(name) {
  const colors = {
    Amaron: '#7AC142',
    Powerzone: '#F9A602',
    Elito: '#E30613',
    'Amaron Lubes': '#7AC142',
    Elf: '#0033A0',
    Castrol: '#00994C',
    Motul: '#E30613',
    'Liqui Moly': '#navyred', // special value for custom shadow
    'WD-40': '#FFD700',
  };
  return colors[name] || '#FFB400';
}

function ProductCategories() {
  return (
    <Box id="products" pad={{ vertical: 'large' }} align="center">
      <style>{`
        .brand-card {
          transition: box-shadow 0.3s, transform 0.2s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
        .brand-img {
          transition: filter 0.3s;
        }
        .brand-card:hover {
          z-index: 2;
          transform: scale(1.06);
        }
      `}</style>
      <Text size="xxlarge" color="brand" weight="bold" margin={{ bottom: 'medium' }}>
        Our Products
      </Text>
      {/* Batteries Section */}
      <Box direction="row" align="center" gap="small" margin={{ bottom: 'medium' }}>
        <Storage color="brand" size="large" />
        <Text size="xlarge" color="brand" weight="bold">Batteries</Text>
      </Box>
      <Box width="100%" align="center">
        <Grid columns={["medium", "medium", "medium"]} gap="large" margin={{ bottom: 'large' }}>
          {getCenteredGridItems(
            batteryBrands.map((brand) => (
              <Card
                key={brand.name}
                background="neutral-1"
                elevation="large"
                pad="medium"
                className="brand-card"
                style={{ minWidth: '220px', alignItems: 'center' }}
                onMouseEnter={e => {
                  let shadow, imgShadow;
                  if (brand.name === 'Liqui Moly') {
                    // Only vertical shadow: top navy blue, bottom red
                    shadow = '0 -16px 32px 0 #003366, 0 16px 32px 0 #E30613, 0 2px 8px rgba(0,0,0,0.12)';
                    imgShadow = 'drop-shadow(0 -8px 12px #003366) drop-shadow(0 8px 12px #E30613)';
                  } else {
                    shadow = `0 0 32px 0 ${getBrandColor(brand.name)}, 0 2px 8px rgba(0,0,0,0.12)`;
                    imgShadow = `drop-shadow(0 0 16px ${getBrandColor(brand.name)})`;
                  }
                  e.currentTarget.style.boxShadow = shadow;
                  const img = e.currentTarget.querySelector('.brand-img');
                  if (img) img.style.filter = imgShadow;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)';
                  const img = e.currentTarget.querySelector('.brand-img');
                  if (img) img.style.filter = 'none';
                }}
              >
                <CardHeader pad="small" align="center" justify="center">
                  <Image src={brand.logo} alt={brand.name} fit="contain" className="brand-img" style={{ maxHeight: 60, marginBottom: 8 }} />
                </CardHeader>
                <CardBody pad="small" align="center">
                  <Text size="large" color="brand" weight="bold" margin={{ bottom: 'xsmall' }}>{brand.name}</Text>
                  <Text size="medium" color="text" style={{ textAlign: 'center' }}>{brand.desc}</Text>
                </CardBody>
              </Card>
            )), 3)}
        </Grid>
      </Box>
      {/* Lubricants & Oils Section */}
      <Box direction="row" align="center" gap="small" margin={{ top: 'large', bottom: 'medium' }}>
        <Test color="brand" size="large" />
        <Text size="xlarge" color="brand" weight="bold">Lubricants & Oils</Text>
      </Box>
      <Box width="100%" align="center">
        <Grid columns={["medium", "medium", "medium"]} gap="large">
          {getCenteredGridItems(
            lubeBrands.map((brand) => (
              <Card
                key={brand.name}
                background="neutral-1"
                elevation="large"
                pad="medium"
                className="brand-card"
                style={{ minWidth: '220px', alignItems: 'center' }}
                onMouseEnter={e => {
                  let shadow, imgShadow;
                  if (brand.name === 'Liqui Moly') {
                    // Only vertical shadow: top navy blue, bottom red
                    shadow = '0 -16px 32px 0 #003366, 0 16px 32px 0 #E30613, 0 2px 8px rgba(0,0,0,0.12)';
                    imgShadow = 'drop-shadow(0 -8px 12px #003366) drop-shadow(0 8px 12px #E30613)';
                  } else {
                    shadow = `0 0 32px 0 ${getBrandColor(brand.name)}, 0 2px 8px rgba(0,0,0,0.12)`;
                    imgShadow = `drop-shadow(0 0 16px ${getBrandColor(brand.name)})`;
                  }
                  e.currentTarget.style.boxShadow = shadow;
                  const img = e.currentTarget.querySelector('.brand-img');
                  if (img) img.style.filter = imgShadow;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)';
                  const img = e.currentTarget.querySelector('.brand-img');
                  if (img) img.style.filter = 'none';
                }}
              >
                <CardHeader pad="small" align="center" justify="center">
                  <Image src={brand.logo} alt={brand.name} fit="contain" className="brand-img" style={{ maxHeight: 60, marginBottom: 8 }} />
                </CardHeader>
                <CardBody pad="small" align="center">
                  <Text size="large" color="brand" weight="bold" margin={{ bottom: 'xsmall' }}>{brand.name}</Text>
                  <Text size="medium" color="text" style={{ textAlign: 'center' }}>{brand.desc}</Text>
                </CardBody>
              </Card>
            )), 3)}
        </Grid>
      </Box>
    </Box>
  );
}

export default ProductCategories;
