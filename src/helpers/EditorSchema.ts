import { SchemaProperties } from 'slate';

import { TYPE as BULLET_LIST_TYPE } from '../components/blocks/bullet-list';
import { TYPE as ORDERED_LIST_TYPE } from '../components/blocks/ordered-list';
import { TYPE as LIST_ITEM_TYPE } from '../components/blocks/list-item';

const EditorSchema: SchemaProperties = {
  blocks: {
    [BULLET_LIST_TYPE]: {
      nodes: [{ match: { type: LIST_ITEM_TYPE } }],
    },
    [ORDERED_LIST_TYPE]: {
      nodes: [{ match: { type: LIST_ITEM_TYPE } }],
    },
  },
};

export default EditorSchema;
