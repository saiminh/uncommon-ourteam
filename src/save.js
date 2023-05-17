import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
export default function save() {
	return (
		<div { ...useBlockProps.save({
      className: 'uncommon-ourteam',
    }) }>
			<InnerBlocks.Content />
      <h2 className='uncommon-ourteam-title fullw-header'>Our team</h2>
      <div className='uncommon-ourteam-switcher'>
        <div className='uncommon-ourteam-switcher-item--explore'>
          Explore
        </div>
        <div className='uncommon-ourteam-switcher-item--list'>
          List
        </div>
      </div>
		</div>
	);
}
