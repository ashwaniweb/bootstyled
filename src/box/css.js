import media from '../media';
const fullForm = {
  my: ['margin-top', 'margin-bottom'],
  mx: ['margin-left', 'margin-right'],
  ml: 'margin-left',
  mr: 'margin-right',
  mt: 'margin-top',
  mb: 'margin-bottom',
  py: ['padding-top', 'padding-bottom'],
  px: ['padding-left', 'padding-right'],
  pl: 'padding-left',
  pr: 'padding-right',
  pt: 'padding-top',
  pb: 'padding-bottom',
  fz: 'font-size',
  w: 'width',
  c: 'color',
  bg: 'background',
  m: 'margin',
  p: 'padding',
  alignItems: 'align-items',
  justifyContent: 'justify-content',
};
const responsive = ['', 'large', 'desktop', 'tablet', 'phone'];

function pxSet(val) {
  return ~~val ? val + 'px' : val;
}

function setValue(key, value) {
  const val = pxSet(value);
  if (Array.isArray(fullForm[key])) {
    return fullForm[key].join(`:${val};`) + `:${val};`;
  } else {
    return `${fullForm[key]}:${val};`;
  }
}
export default function cssEmbed(cssProp) {
  return Object.keys(cssProp).reduce((prev, next) => {
    let value = cssProp[next];
    if (value) {
      let css = '';
      if (typeof value === 'boolean') {
        //add boolean css
        css += next;
      } else if (typeof value === 'string') {
        if (next === 'css') {
          // add css attribute css
          css += cssProp[next] + ';';
        } else {
          // add other fullform css attribute css
          css += setValue(next, cssProp[next]);
        }
      } else if (Array.isArray(value)) {
        // add media css when value is array
        if (next === 'css') {
          // add css attribute css
          css += value.map((val, i) => {
            if (i === 0) {
              return val + ';';
            } else {
              if (val) {
                return media[responsive[i]]`
                  ${val};
              `;
              }
            }
            return '';
          });
        } else {
          // add other fullform css attribute css
          css += value.map((val, i) => {
            if (i === 0) {
              return setValue(next, val);
            } else {
              if (val) {
                return media[responsive[i]]`
                  ${setValue(next, val)}
              `;
              }
            }
            return '';
          });
        }
      }
      // remove , form array css
      return prev + css.replace(/,/g, '');
    }
    return prev;
  }, '');
}
