import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps({
      className: 'uncommon-ourteam',
    }) }>
			<InnerBlocks  
        allowedBlocks={['create-block/uncommon-ourteam-teammember']}
        template={[
          ['create-block/uncommon-ourteam-teammember'],
          ['create-block/uncommon-ourteam-teammember'],
          ['create-block/uncommon-ourteam-teammember'],
          ['create-block/uncommon-ourteam-teammember'],
          ['create-block/uncommon-ourteam-teammember'],
          ['create-block/uncommon-ourteam-teammember'],
          ['create-block/uncommon-ourteam-teammember'],
          ['create-block/uncommon-ourteam-teammember'],
          ['create-block/uncommon-ourteam-teammember'],
          ['create-block/uncommon-ourteam-teammember'],
          ['create-block/uncommon-ourteam-teammember']
        ]}
      />
		</div>
	);
}
