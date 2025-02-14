import {
    r as _0x1b1f2d,
    R as _0x789072,
    j as _0x4b68c3,
    E as _0x53f65e,
    u as _0x48f88e,
    S as _0x5cf668,
    a as _0x421fa7,
    b as _0x14a749,
    c as _0x26c31e,
    d as _0x575192,
    e as _0xa83723,
    f as _0xf41951,
    g as _0xd14bc8,
    h as _0x3265b8,
    i as _0x2e9ea0,
    T as _0x1ffaf7,
    k as _0x2a54e0,
    l as _0x32691c,
    m as _0x54532a,
    n as _0x48ba7a,
    I as _0x5d6d6b,
    o as _0x93b07a,
    F as _0xbb284e,
    p as _0x218c8b,
    q as _0x419281
} from './bk-index-12580bf0.js';
var e = Object['defineProperty'];
var r = function (_0x43893d, _0x119f3f) {
    return e(_0x43893d, 'name', {
        'value': _0x119f3f,
        'configurable': !![]
    });
};
var n = r(function (_0xb4b09f) {
    _0x1b1f2d['useEffect'](function () {
        var _0x5b99d4 = document['head']['querySelectorAll']('style');
        var _0x32a2ae = !![], _0xb76f2f = ![], _0x117a30 = void 0x0;
        try {
            for (var _0x31bd9a = _0x5b99d4[Symbol['iterator']](), _0x57de9c; !(_0x32a2ae = (_0x57de9c = _0x31bd9a['next']())['done']); _0x32a2ae = !![]) {
                var _0x4fd334 = _0x57de9c['value'];
                if (_0x4fd334['innerHTML'] === _0xb4b09f)
                    return;
            }
        } catch (_0x13f449) {
            _0xb76f2f = !![];
            _0x117a30 = _0x13f449;
        } finally {
            try {
                if (!_0x32a2ae && _0x31bd9a['return'] != null) {
                    _0x31bd9a['return']();
                }
            } finally {
                if (_0xb76f2f) {
                    throw _0x117a30;
                }
            }
        }
        var _0x304879 = document['createElement']('style');
        _0x304879['innerHTML'] = _0xb4b09f, document['head']['appendChild'](_0x304879);
    }, [_0xb4b09f]);
}, 'useStyleInjection');
const findFirstElementInDOM = _0x2f20d3 => {
    return _0x2f20d3['filter'](_0x5d0680 => _0x5d0680 !== null)['sort']((_0x2a178d, _0x3285db) => {
        if (!_0x2a178d || !_0x3285db) {
            return 0x0;
        }
        return _0x2a178d['compareDocumentPosition'](_0x3285db) & Node['DOCUMENT_POSITION_FOLLOWING'] ? -0x1 : 0x1;
    })[0x0];
};
const insertReviewSection = _0x8882f1 => {
    var _0x5db0e1, _0x81ac04;
    const _0x3ada85 = document['getElementById']('bk-review-section');
    const _0x1f3a30 = document['getElementById']('auto-bk-review-section');
    if (_0x3ada85 || _0x1f3a30) {
        console['log']('returned\x20because\x20already\x20review\x20section');
        return;
    }
    let _0x3a7a8f;
    const _0x3b4f8f = document['querySelectorAll']('.shopify-section[id*=\x22template\x22]');
    for (const _0x3c924b of _0x3b4f8f) {
        if (_0x3c924b['querySelector']('h1') || _0x3c924b['querySelector']('h2')) {
            _0x3a7a8f = _0x3c924b;
            break;
        }
    }
    const _0x349ef6 = document['querySelector']('[data-store*=\x22product-detail\x22]');
    if (_0x349ef6) {
        _0x3a7a8f = _0x349ef6;
    }
    const _0x182402 = document['querySelector']('main') ?? document['querySelector']('#main') ?? document['querySelector']('[role=\x22main\x22]');
    const _0x1350eb = _0x3a7a8f ? _0x3a7a8f['parentNode'] : _0x182402;
    const _0x7ec99a = document['createElement']('div');
    _0x7ec99a['classList']['add']('bk-reviews', _0x8882f1);
    _0x7ec99a['style']['width'] = '100%';
    _0x7ec99a['style']['height'] = 'fit-content';
    _0x7ec99a['id'] = 'auto-bk-review-section';
    const _0x252893 = document['querySelector']('.container--flush');
    const _0x4d1651 = document['querySelector']('.shopify-section[id*=\x22recently-viewed-products\x22]');
    const _0x12b869 = document['querySelector']('.shopify-section[id*=\x22recommendations\x22]');
    const _0x30b39b = document['querySelector']('product-recommendations');
    const _0x20b790 = document['querySelector']('.shopify-section[id*=\x22promotions\x22]');
    const _0xc9b5da = document['querySelector']('.shopify-section[id*=\x22product-content\x22]');
    const _0x4ec34a = document['querySelector']('.shopify-section[id*=\x22information-tabs\x22]');
    const _0x2270a5 = [
        _0x4d1651,
        _0x12b869,
        _0x30b39b,
        _0x20b790
    ];
    const _0x4dc44e = findFirstElementInDOM(_0x2270a5);
    const _0x7a505b = _0x4dc44e == null ? void 0x0 : _0x4dc44e['parentNode'];
    if (_0x4dc44e && _0x7a505b) {
        console['log']('insertBeforeSection', _0x4dc44e);
        _0x7a505b['insertBefore'](_0x7ec99a, _0x4dc44e);
    } else if (_0xc9b5da == null ? void 0x0 : _0xc9b5da['nextElementSibling']) {
        console['log']('productSection', _0xc9b5da);
        (_0x5db0e1 = _0xc9b5da['parentNode']) == null ? void 0x0 : _0x5db0e1['insertBefore'](_0x7ec99a, _0xc9b5da['nextElementSibling']);
    } else if (_0x4ec34a == null ? void 0x0 : _0x4ec34a['nextElementSibling']) {
        console['log']('informationTabsSection', _0x4ec34a);
        (_0x81ac04 = _0x4ec34a['parentNode']) == null ? void 0x0 : _0x81ac04['insertBefore'](_0x7ec99a, _0x4ec34a['nextElementSibling']);
    } else if ((_0x252893 == null ? void 0x0 : _0x252893['parentNode']) && _0x252893['nextElementSibling']) {
        console['log']('containerFlush', _0x252893);
        _0x252893['parentNode']['insertBefore'](_0x7ec99a, _0x252893['nextElementSibling']);
    } else if (_0x3a7a8f) {
        if (_0x3a7a8f['nextElementSibling']) {
            console['log']('after\x20targetSection');
            _0x1350eb == null ? void 0x0 : _0x1350eb['insertBefore'](_0x7ec99a, _0x3a7a8f['nextElementSibling']);
        } else {
            console['log']('child\x20of\x20targetSectionParent');
            _0x1350eb == null ? void 0x0 : _0x1350eb['appendChild'](_0x7ec99a);
        }
    } else if (_0x182402) {
        console['log']('child\x20of\x20mainSection');
        _0x182402['appendChild'](_0x7ec99a);
    } else {
        console['log']('no\x20section\x20found');
    }
    _0x789072['render'](_0x4b68c3['jsx'](_0x53f65e, {
        'theme': _0x8882f1,
        'extension': 'review-section'
    }), _0x7ec99a);
};
const insertStarSection = _0x50ef2a => {
    const _0x5d2b3a = document['getElementById']('bk-star-section');
    const _0x516df3 = document['getElementById']('auto-bk-star-section');
    if (_0x5d2b3a || _0x516df3) {
        console['log']('returned\x20because\x20already\x20star\x20section');
        return;
    }
    const _0x22b0bd = document['querySelector']('form#product-form\x20>\x20div.flex.flex-col.gap-4\x20>\x20div') ?? document['querySelector']('main') ?? document['querySelector']('#main') ?? document['querySelector']('[role=\x22main\x22]');
    const _0x463141 = [document['querySelector']('[data-store*=”product-name-”]') ?? (_0x22b0bd == null ? void 0x0 : _0x22b0bd['querySelector']('h1')) ?? document['querySelector']('h1') ?? (_0x22b0bd == null ? void 0x0 : _0x22b0bd['querySelector']('h2')) ?? document['querySelector']('h2')];
    const _0x27129f = document['querySelectorAll']('.small--hide\x20h1,\x20.small--hide\x20h2');
    _0x27129f['forEach'](_0x70e15 => {
        _0x463141['push'](_0x70e15);
    });
    _0x463141['forEach'](_0x3c7eea => {
        const _0x1effc0 = _0x3c7eea == null ? void 0x0 : _0x3c7eea['parentElement'];
        const _0xc695a0 = document['createElement']('div');
        _0xc695a0['classList']['add']('bk-reviews', _0x50ef2a);
        _0xc695a0['id'] = 'auto-bk-star-section';
        if (_0x3c7eea && _0x1effc0) {
            _0x3c7eea['style']['marginBottom'] = '0';
            _0x1effc0['insertBefore'](_0xc695a0, _0x3c7eea['nextSibling']);
            _0x789072['render'](_0x4b68c3['jsx'](_0x53f65e, {
                'theme': _0x50ef2a,
                'extension': 'star-section'
            }), _0xc695a0);
        }
    });
};
function DefaultCollectionStarSection({
    reviewAmount: _0x10dcf0,
    averageRating: _0x358d22
}) {
    const _0x26b780 = _0x1b1f2d['useRef'](null);
    const _0x436e13 = _0x48f88e(_0x26b780);
    return _0x4b68c3['jsx']('div', {
        'ref': _0x26b780,
        'className': 'tw-flex\x20tw-gap-2\x20tw-text-black/80\x20tw-text-md',
        'style': { 'justifyContent': _0x436e13 },
        'children': _0x4b68c3['jsxs']('div', {
            'className': 'tw-flex\x20tw-gap-1\x20tw-items-center',
            'children': [
                _0x4b68c3['jsx'](_0x5cf668, {
                    'starSize': 'medium',
                    'className': 'tw-text-2xl\x20mb-[1px]',
                    'averageRating': _0x358d22
                }),
                _0x4b68c3['jsxs']('p', {
                    'className': 'tw-text-[max(14px,_1rem)]\x20tw-leading-[normal]',
                    'children': [
                        '(',
                        _0x10dcf0,
                        ')'
                    ]
                })
            ]
        })
    });
}
function PianoCollectionStarSection({
    reviewAmount: _0x4157d4,
    averageRating: _0xed2a44
}) {
    const _0x2f8d0a = _0x1b1f2d['useRef'](null);
    const _0xde3843 = _0x48f88e(_0x2f8d0a);
    return _0x4b68c3['jsx']('div', {
        'className': 'tw-flex\x20tw-gap-2\x20tw-text-black/80\x20tw-text-md\x20tw-items-center',
        'style': { 'justifyContent': _0xde3843 },
        'children': _0x4b68c3['jsxs']('div', {
            'className': 'tw-flex\x20tw-gap-1\x20tw-items-center',
            'children': [
                _0x4b68c3['jsx'](_0x421fa7, {
                    'starSize': 'medium',
                    'className': 'tw-text-2xl\x20tw-mb-[1px]',
                    'averageRating': _0xed2a44
                }),
                _0x4b68c3['jsxs']('p', {
                    'className': 'tw-text-[max(14px,_1rem)]',
                    'children': [
                        '(',
                        _0x4157d4,
                        ')'
                    ]
                })
            ]
        })
    });
}
function collectionStarSectionFactory({
    theme: _0x37f7fb,
    componentProps: _0x3eba25
}) {
    const {
        reviewAmount: _0x4f913d,
        averageRating: _0x584330
    } = _0x3eba25;
    const _0x43cf17 = {
        'default': _0x4b68c3['jsx'](DefaultCollectionStarSection, {
            'reviewAmount': _0x4f913d,
            'averageRating': _0x584330
        }),
        'sol': _0x4b68c3['jsx'](DefaultCollectionStarSection, {
            'reviewAmount': _0x4f913d,
            'averageRating': _0x584330
        }),
        'classic': _0x4b68c3['jsx'](DefaultCollectionStarSection, {
            'reviewAmount': _0x4f913d,
            'averageRating': _0x584330
        }),
        'wide': _0x4b68c3['jsx'](DefaultCollectionStarSection, {
            'reviewAmount': _0x4f913d,
            'averageRating': _0x584330
        }),
        'piano': _0x4b68c3['jsx'](PianoCollectionStarSection, {
            'reviewAmount': _0x4f913d,
            'averageRating': _0x584330
        })
    };
    return _0x43cf17[_0x37f7fb] ?? _0x43cf17['default'];
}
function CollectionStarSection({
    theme: _0x369f26,
    reviewAmount: _0x283f02,
    averageRating: _0x5ee242
}) {
    const _0x10cdd3 = collectionStarSectionFactory({
        'theme': _0x369f26,
        'componentProps': {
            'reviewAmount': _0x283f02,
            'averageRating': _0x5ee242
        }
    });
    return _0x4b68c3['jsx']('div', {
        'className': 'tw-my-[0.75rem]',
        'children': _0x10cdd3
    });
}
const getStoreProducts = async _0x42c04e => {
    const _0x10ff97 = 0xfa;
    const _0x4521a5 = 'https://' + _0x42c04e + '/products.json?limit=' + _0x10ff97;
    const _0x2c2958 = 0x5;
    const _0x1c23a4 = 0x3;
    let _0x46f3fc = [];
    let _0x5bf215 = ![];
    for (let _0x39fcae = 0x0; _0x39fcae < _0x1c23a4; _0x39fcae++) {
        await Promise['all'](new Array(_0x2c2958)['fill'](0x0)['map'](async (_0x3b14cd, _0x11df73) => {
            const _0x247d4f = _0x2c2958 * _0x39fcae + _0x11df73 + 0x1;
            const _0x23b086 = _0x4521a5 + '&page=' + _0x247d4f;
            const _0x3aa13f = await _0x14a749['get'](_0x23b086);
            if (_0x3aa13f['status'] !== 0xc8) {
                console['error']('Failed\x20to\x20fetch\x20products\x20from\x20' + _0x23b086);
                return;
            }
            const _0x2f7151 = _0x3aa13f['data']['products'];
            _0x46f3fc = _0x46f3fc['concat'](_0x2f7151);
            if (_0x2f7151['length'] < _0x10ff97) {
                _0x5bf215 = !![];
            }
        }));
        if (_0x5bf215) {
            break;
        }
    }
    return _0x46f3fc;
};
const insertProductStatistics = (_0x47cc02, _0x5a5b71, _0x44eaba, _0x3979a4, _0x1fa0c3, _0x6cb0b0) => {
    const {
        averageRating: _0x59fbfc,
        reviewAmount: _0x346834
    } = _0x47cc02;
    if (_0x5a5b71['querySelector']('.collection-star-section[data-product-id=\x22' + _0x3979a4 + '\x22]')) {
        return;
    }
    if (_0x1fa0c3 && !_0x346834) {
        return;
    }
    const _0x475b75 = document['createElement']('div');
    _0x475b75['classList']['add']('collection-star-section', 'bk-reviews', _0x44eaba);
    _0x475b75['setAttribute']('data-product-id', _0x3979a4);
    _0x475b75['style']['textAlign'] = 'inherit';
    if (_0x6cb0b0 === 'nuvemshop') {
        _0x5a5b71 = _0x5a5b71['querySelector']('.item-link');
        if (!_0x5a5b71) {
            return;
        }
    }
    _0x5a5b71['style']['margin'] = '0';
    const _0x3c3e4b = _0x5a5b71['parentElement'];
    if (!_0x3c3e4b) {
        return;
    }
    const _0x4379c4 = _0x5a5b71['nextElementSibling'];
    if (_0x4379c4) {
        _0x4379c4['style']['setProperty']('margin-top', '0');
        _0x3c3e4b['insertBefore'](_0x475b75, _0x4379c4);
    } else {
        _0x3c3e4b['appendChild'](_0x475b75);
    }
    _0x789072['render'](_0x4b68c3['jsx'](CollectionStarSection, {
        'theme': _0x44eaba,
        'averageRating': _0x59fbfc,
        'reviewAmount': _0x346834
    }), _0x475b75);
};
const getStoreProductsMap = async (_0x24fa2d, _0x9c6c49) => {
    const _0x46d594 = new Map();
    _0x24fa2d['forEach'](_0xa92901 => {
        _0x46d594['set'](_0xa92901['handle'], _0xa92901['id']);
    });
    return _0x46d594;
};
const insertProductsStatistics = async (_0x2a8938, _0x185fb8, _0xdb8ed1, _0x6660d5, _0x29e97a, _0x156404) => {
    const _0x16538b = new Map();
    _0x2a8938['forEach'](_0x2732cc => {
        _0x16538b['set'](_0x2732cc['productId'], _0x2732cc);
    });
    await Promise['all'](_0x185fb8['map'](async _0x540789 => {
        var _0x436dfe, _0x671cfb, _0x4e32c2;
        let _0x584ec5;
        if (_0x156404 === 'nuvemshop') {
            _0x584ec5 = _0x540789['getAttribute']('data-product-id') ?? void 0x0;
        } else {
            const _0x40b8b3 = decodeURIComponent(_0x540789['getAttribute']('href') ?? '');
            const _0xdda325 = (_0x671cfb = (_0x436dfe = _0x40b8b3['split']('/products/')) == null ? void 0x0 : _0x436dfe[0x1]) == null ? void 0x0 : _0x671cfb['split']('?')[0x0];
            if (!_0xdda325) {
                return;
            }
            _0x584ec5 = _0xdb8ed1['get'](_0xdda325);
        }
        const _0x43c7a1 = _0x584ec5 ? _0x16538b['get'](String(_0x584ec5)) : null;
        const _0x5d4063 = (_0x4e32c2 = _0x540789['parentElement']) == null ? void 0x0 : _0x4e32c2['querySelector']('.collection-star-section[data-product-id=\x22' + _0x584ec5 + '\x22]');
        if (_0x5d4063) {
            return;
        }
        if (_0x43c7a1) {
            insertProductStatistics(_0x43c7a1, _0x540789, _0x6660d5, String(_0x584ec5), _0x29e97a, _0x156404);
            return await Promise['resolve']();
        }
    }));
    if (!_0x156404) {
        fixSliderOverflow();
    }
};
const getProductCards = (_0x20fd3f, _0x5fc25c) => {
    let _0x8528ce = [];
    const _0x1d6cb6 = '.shopify-section[id*=\x22recently-viewed-products\x22]';
    const _0x571436 = '.shopify-section[id*=\x22recommendations\x22]';
    const _0x2360f9 = '.shopify-section[id*=\x22promotions\x22]';
    const _0x3d9a82 = [
        _0x1d6cb6,
        _0x571436,
        _0x2360f9
    ];
    const _0x1842da = _0x5fc25c === 'nuvemshop' ? ['div[data-product-id]'] : [
        'a[href*=\x22/products/\x22][class*=\x22title\x22]',
        '[class*=\x22title\x22]\x20a[href*=\x22/products/\x22]',
        'a[href*=\x22/products/\x22][id*=\x22CardLink\x22]',
        'a[href*=\x22/products/\x22][class*=\x22product-link\x22]',
        'a[href*=\x22/products/\x22][class*=\x22link\x22]'
    ];
    let _0x1ed47b = _0x1842da;
    if (_0x20fd3f) {
        let _0x3be292;
        for (const _0x439bae of _0x1842da) {
            const _0x51d044 = document['querySelector'](_0x439bae);
            if (_0x51d044) {
                _0x3be292 = _0x439bae;
                break;
            }
        }
        if (!_0x3be292) {
            return [];
        }
        _0x1ed47b = _0x3d9a82['map'](_0x4bf574 => _0x4bf574 + '\x20' + _0x3be292);
    }
    for (const _0x4bb8ae of _0x1ed47b) {
        _0x8528ce = document['querySelectorAll'](_0x4bb8ae);
        if (_0x8528ce['length']) {
            break;
        }
    }
    return Array['from'](_0x8528ce)['filter'](_0x2f1ff1 => _0x2f1ff1 instanceof HTMLElement);
};
const getProductHandles = _0x263e9c => {
    const _0x523de5 = new Set();
    _0x263e9c['forEach'](_0x1c6eb3 => {
        var _0x4a255b, _0x2a3c71;
        const _0x3bd83c = decodeURIComponent(_0x1c6eb3['getAttribute']('href') ?? '');
        const _0x4c0bda = (_0x2a3c71 = (_0x4a255b = _0x3bd83c['split']('/products/')) == null ? void 0x0 : _0x4a255b[0x1]) == null ? void 0x0 : _0x2a3c71['split']('?')[0x0];
        if (!_0x4c0bda) {
            return;
        }
        _0x523de5['add'](_0x4c0bda);
    });
    return _0x523de5;
};
const getFilteredProducts = (_0x5dd4d9, _0x33cef1) => {
    const _0x28dd9e = [];
    for (const _0x52baf2 of _0x33cef1) {
        if (_0x5dd4d9['has'](_0x52baf2['handle'])) {
            _0x28dd9e['push'](_0x52baf2);
        }
    }
    return _0x28dd9e;
};
const getProductIds = _0x4ee54c => {
    return _0x4ee54c['map'](_0x3ac690 => _0x3ac690['id'])['sort']((_0x594044, _0x486d9b) => Number(_0x486d9b) - Number(_0x594044));
};
const getProductsStatistics = (_0x4a6303, _0x2063cb) => {
    const _0x588cbc = new _0x26c31e(_0x4a6303[0x0], _0x2063cb, _0x575192);
    return _0x588cbc['getCollectionStatistics'](_0x4a6303);
};
const fixSliderOverflow = () => {
    const _0x415b4e = [];
    const _0x2c40c0 = [
        '.flickity-viewport:has(.collection-star-section)',
        '.product-list:has(.collection-star-section)'
    ];
    for (const _0x297c71 of _0x2c40c0) {
        const _0x5c2f46 = document['querySelectorAll'](_0x297c71);
        _0x415b4e['push'](..._0x5c2f46);
    }
    if (!_0x415b4e['length']) {
        return;
    }
    _0x415b4e['forEach'](_0x24b66d => {
        const _0x248501 = _0x24b66d['querySelector']('.flickity-slider\x20>\x20div');
        if (!_0x248501) {
            return;
        }
        const _0x3285d7 = _0x248501['offsetHeight'];
        const _0x1d6a68 = _0x24b66d['offsetHeight'];
        if (_0x3285d7 > _0x1d6a68) {
            _0x24b66d['style']['height'] = _0x3285d7 + 'px';
        }
    });
};
let allStoreProducts;
const statistics = new Map();
const getStatisticsAndMap = async (_0x23b6c3, _0x47347e, _0xaebc60) => {
    let _0xb94974;
    let _0x53f504 = [];
    let _0x4639df = [];
    if (_0xaebc60 === 'nuvemshop') {
        _0x53f504 = _0x23b6c3['map'](_0x428311 => _0x428311['getAttribute']('data-product-id') ?? '');
        _0xb94974 = _0x53f504['toString']();
        _0x4639df = _0x53f504['map'](_0x4bf6e2 => ({
            'id': _0x4bf6e2,
            'handle': _0x4bf6e2
        }));
    } else {
        const _0x59dd0a = getProductHandles(_0x23b6c3);
        if (!allStoreProducts) {
            allStoreProducts = await getStoreProducts(_0x47347e);
        }
        _0x4639df = getFilteredProducts(_0x59dd0a, allStoreProducts);
        _0x53f504 = getProductIds(_0x4639df);
        _0xb94974 = _0x53f504['toString']();
    }
    const _0x44fc17 = await getStoreProductsMap(_0x4639df);
    if (!statistics['get'](_0xb94974)) {
        statistics['set'](_0xb94974, await getProductsStatistics(_0x53f504, _0x47347e));
    }
    return {
        'statistics': statistics['get'](_0xb94974),
        'productMap': _0x44fc17
    };
};
async function insertCollectionStarSection(_0x4ffd95, _0x1c7cb9, _0x38af74, _0x2ce0e4 = ![], _0x49b8f3 = !![], _0x706c2c) {
    const _0x800c3b = getProductCards(_0x4ffd95, _0x706c2c);
    const {
        statistics: _0x3c7fbb,
        productMap: _0x2b756a
    } = await getStatisticsAndMap(_0x800c3b, _0x1c7cb9, _0x706c2c);
    if (_0x49b8f3 && _0x38af74 && _0x3c7fbb && _0x2b756a) {
        insertProductsStatistics(_0x3c7fbb, _0x800c3b, _0x2b756a, _0x38af74, _0x2ce0e4, _0x706c2c);
    }
}
function observeDOM(_0x6576e0, _0x1641a9) {
    const _0x3c23f1 = new MutationObserver(_0x1641a9);
    _0x3c23f1['observe'](_0x6576e0, {
        'childList': !![],
        'subtree': !![]
    });
    return _0x3c23f1;
}
const injectThemePreferencesStyle = _0x191ddf => {
    if (!_0x191ddf) {
        return;
    }
    const _0x539c36 = '.bk-reviews\x20>\x20*\x20{' + Object['entries'](_0x191ddf)['filter'](([_0x74f349]) => _0x74f349['includes']('Color'))['map'](([_0x337d6a, _0x5ed155]) => _0x5ed155 && '--twc-' + _0x337d6a['split']('Color')[0x0] + ':\x20' + _0x32691c(_0x5ed155)['slice'](0x4, -0x1)['replaceAll'](',', ''))['join'](';\x20') + ';}';
    n(_0x539c36);
};
function App() {
    const _0x1ed896 = _0xa83723();
    const _0x9aedcb = _0xf41951();
    const _0x1bb357 = _0xd14bc8(_0x9aedcb);
    const _0x3233b7 = _0x3265b8(_0x9aedcb);
    const {reviewStatistics: _0xc72d77} = _0x1b1f2d['useContext'](_0x2e9ea0);
    const {
        theme: _0x1141cb,
        setTheme: _0x260040,
        themePreferences: _0x5cf77e,
        setThemePreferences: _0x78f831
    } = _0x1b1f2d['useContext'](_0x1ffaf7);
    _0x2a54e0(_0x9aedcb);
    injectThemePreferencesStyle(_0x5cf77e);
    const _0x1483b3 = !(_0xc72d77 == null ? void 0x0 : _0xc72d77['reviewAmount']) && (_0x5cf77e == null ? void 0x0 : _0x5cf77e['starsWithoutReviews']) === ![];
    _0x1b1f2d['useEffect'](() => {
        if (!_0x1bb357) {
            return;
        }
        const _0x4aff23 = async () => {
            try {
                const {
                    theme: _0x4dda31,
                    theme_preferences: _0x1e5c22
                } = await _0x1ed896['getStorePreferences']();
                _0x260040(_0x4dda31);
                if (!_0x1e5c22 || !_0x78f831) {
                    return;
                }
                _0x78f831(_0x1e5c22);
                const _0x4feddb = () => insertCollectionStarSection(Boolean(_0x3233b7), _0x1bb357, _0x4dda31, (_0x1e5c22 == null ? void 0x0 : _0x1e5c22['starsWithoutReviews']) === ![], (_0x1e5c22 == null ? void 0x0 : _0x1e5c22['starsInBox']) !== ![], _0x9aedcb);
                _0x4feddb();
                setTimeout(() => observeDOM(window['document']['body'], _0x4feddb), 0x3e8);
            } catch {
                _0x260040('default');
            }
        };
        _0x4aff23();
    }, [
        _0x9aedcb,
        _0x3233b7,
        _0x260040,
        _0x78f831,
        _0x1bb357
    ]);
    _0x1b1f2d['useEffect'](() => {
        var _0x2d62a7;
        if (_0x1bb357 && _0x3233b7 && _0x1141cb && _0xc72d77) {
            (_0x2d62a7 = document['querySelector']('#bk-reviews-root')) == null ? void 0x0 : _0x2d62a7['setAttribute']('data-theme', _0x1141cb);
            if (!_0x1483b3) {
                insertStarSection(_0x1141cb);
                insertReviewSection(_0x1141cb);
            }
        }
    }, [
        _0x1141cb,
        _0xc72d77,
        _0x1bb357,
        _0x3233b7,
        _0x1483b3
    ]);
    const _0x213d06 = ![];
    return _0x213d06 && _0x1141cb !== void 0x0 ? _0x4b68c3['jsxs'](_0x4b68c3['Fragment'], {
        'children': [
            _0x4b68c3['jsx'](_0x53f65e, {
                'theme': _0x1141cb,
                'extension': 'star-section'
            }),
            _0x4b68c3['jsx'](_0x53f65e, {
                'theme': _0x1141cb,
                'extension': 'review-section'
            })
        ]
    }) : null;
}
_0x54532a['createRoot'](document['getElementById']('bk-reviews-root'))['render'](_0x4b68c3['jsx'](_0x48ba7a['StrictMode'], {
    'children': _0x4b68c3['jsx'](_0x5d6d6b, {
        'i18n': _0x93b07a,
        'children': _0x4b68c3['jsx'](_0xbb284e, { 'children': _0x4b68c3['jsx'](_0x218c8b, { 'children': _0x4b68c3['jsx'](_0x419281, { 'children': _0x4b68c3['jsx'](App, {}) }) }) })
    })
}));