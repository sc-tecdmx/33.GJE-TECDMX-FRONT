
export interface TreeNode {
    id: number;
    name: string;
    type: 'file' | 'folder';
    children?: TreeNode[];
  }