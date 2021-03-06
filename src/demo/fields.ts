const CO = {
  country: [{ value: 'china', label: 'China' }, { value: 'usa', label: 'U.S.A' }],
  abc: [{ value: 'a', label: 'Item1' }, { value: 'b', label: 'Item2' }, { value: 'c', label: 'Item3' }]
}

const CD = {
  marks: { 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }
}

export const fields = [
  { field: 'text01', title: '文本', type: 'string', widget: 'text', initialValue: 'Helo Lom' },

  { field: 'input01', hidden: true, title: 'Input', type: 'string', widget: 'input', extra: '看起来这是一个Extra'  },
  { field: 'input02', span: 2, title: 'Input tootip', type: 'string', widget: 'input', tooltip: '这就是传说中的Tooltip!' },

  { field: 'number01', title: 'Number', 'c:title': [['input02'], (i02: string) => i02], type: 'number', widget: 'number', more: { unit: '吨'} },

  { field: 'obj01', title: 'Object', type: 'object', widget: 'object', properties: [
    { field: 'input01', title: 'Input', type: 'string', widget: 'input', 'c:extra': (form: any) => form.getFieldValue('obj01.input02') },
    { field: 'input02', span: 3, 'ij:title': '', type: 'string', widget: 'input', 'c:tooltip': (form: any) => form.getFieldValue('obj01.input01') },

    { field: 'number01', title: 'Number', type: 'number', widget: 'number', more: { unit: '吨'} },
  ] },

  { field: 'arr01', title: 'Array', type: 'array', widget: 'array', initialValue: [{}, {}], properties: [
    { field: 'rate01', title: 'Rate', type: 'number', widget: 'rate', initialValue: 2, more: {} },
    { field: 'input01', disabled: true,
    // 'c:span': [['arr01'], (arr: any[] = [{}], idx: number) => (arr[idx] || {}).rate01 || 1],
    // 'c:span': (form: any, idx: number) => { const arr = form.getFieldValue('arr01') || []; return (arr[idx] || {}).rate01 || 1; },
    'c:span': (form: any, idx: number) => {
      const r1 = form.getFieldValue(`arr01[${idx}].rate01`)
      return r1 || 1
    },
    title: 'Input', type: 'string', widget: 'input', extra: '看起来这是一个Extra', required: true },
    { field: 'select02', span: 2, title: '选择(必填)', type: 'string', widget: 'select', options: CO.country, required: true },
    { field: 'select03', title: '选择(必填)', type: 'string', widget: 'select', options: CO.country, required: true },
    { field: 'input02', title: '中文', type: 'string', widget: 'input', 'ij:extra': ''  },
  ] },

  { field: 'select01', title: '选择', type: 'string', widget: 'select', 'c:options': [['switch01'], (sw01: string) => sw01 ? CO.country : CO.abc] },
  { field: 'select02', title: '选择(必填)', type: 'string', widget: 'select', options: CO.country, required: true },
  { field: 'select03', title: '选择(多选)', type: 'array', widget: 'select', options: CO.country, more: { mode: 'multiple' }, initialValue: ['china'] },

  { field: 'switch01', 'ij:title': '', type: 'boolean', widget: 'switch'  },

  { field: 'slider01', title: 'Slider', type: 'number', widget: 'slider', more: { marks: CD.marks } },

  { field: 'radio01', title: 'Radio', type: 'string', widget: 'radio', 'ij:options': 'ops-ABC', more: {} },
  { field: 'radio02', title: 'Radio Button', type: 'string', widget: 'radio-button', options: CO.abc, more: {} },

  { field: 'checkbox01', title: 'Checkboxes', type: 'array', widget: 'checkboxes', options: CO.abc, initialValue: ['a', 'b'], more: {} },
  { field: 'checkbox02', title: 'Checkboxes', type: 'array', widget: 'checkboxes', options: CO.abc, more: { colSpan: 8 } },

  { field: 'rate01', title: 'Rate', type: 'number', widget: 'rate', initialValue: 3.5, more: {} },

  { field: 'upload01', title: 'Upload', type: 'array', widget: 'upload', more: {} },
  { field: 'upload02', title: '上传', type: 'array', widget: 'upload', more: { buttonText: '点击上传' } },
  { field: 'upload03', title: '上传', type: 'array', widget: 'upload', more: { buttonText: '点击上传Format',
    action: 'upload.action',
    formatFiles: (e: any) => {
      console.log(e)
      if (Array.isArray(e)) {
        return e.filter(f => !f.error);
      }
      return ((e && e.fileList) || []).filter((f: any) => !f.error);
    }
  } },

  { field: 'dragger01', title: 'Dragger', type: 'array', widget: 'dragger', more: {} },
]