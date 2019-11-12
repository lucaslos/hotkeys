import { isff } from './utils';

// Special Keys
const _keyMap = () => ({
  backspace: 8,
  tab: 9,
  clear: 12,
  enter: 13,
  return: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  del: 46,
  delete: 46,
  ins: 45,
  insert: 45,
  home: 36,
  end: 35,
  pageup: 33,
  pagedown: 34,
  capslock: 20,
  '⇪': 20,
  ',': 188,
  '.': 190,
  '/': 191,
  '`': 192,
  '-': isff() ? 173 : 189,
  '=': isff() ? 61 : 187,
  ';': isff() ? 59 : 186,
  "'": 222,
  '[': 219,
  ']': 221,
  '\\': 220,
  f1: 111 + 1,
  f2: 111 + 2,
  f3: 111 + 3,
  f4: 111 + 4,
  f5: 111 + 5,
  f6: 111 + 6,
  f7: 111 + 7,
  f8: 111 + 8,
  f9: 111 + 9,
  f10: 111 + 10,
  f11: 111 + 11,
  f12: 111 + 12,
});

// Modifier Keys
const _modifier = {
  // shiftKey
  '⇧': 16,
  shift: 16,
  // altKey
  '⌥': 18,
  alt: 18,
  option: 18,
  // ctrlKey
  '⌃': 17,
  ctrl: 17,
  control: 17,
  // metaKey
  '⌘': 91,
  cmd: 91,
  command: 91,
};
const modifierMap = {
  16: 'shiftKey',
  18: 'altKey',
  17: 'ctrlKey',
  91: 'metaKey',

  shiftKey: 16,
  ctrlKey: 17,
  altKey: 18,
  metaKey: 91,
};
const _mods = {
  16: false,
  18: false,
  17: false,
  91: false,
};
const _handlers = {};

export { _keyMap, _modifier, modifierMap, _mods, _handlers };
