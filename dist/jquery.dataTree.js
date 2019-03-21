/****************************************************
* jQuery plugin for adding dataTree functionality
*
* Author:	Gareth Cadwaladr
* Version:	1.0
*
* Copyright 2013 Gareth Cadwaladr
* Released under the MIT License
****************************************************/

// wrapper around the plugin
;(function ( $, window, document, undefined ) {
    var openCSS, closedCSS, endCSS;
    $.fn.dataTree = function (options) {
        
        var settings = $.extend({
            delimeter: '.',
            openCSS: 'open',
            closedCSS: 'closed',
            endCSS: 'end',
            opened: []
        }, options);

        // for each data tree we run this on
        return this.each(function () {
            $tree = $(this);
            // if not empty
			
            if ($tree.length) {
                dataTreeInit($tree, settings);
            }
        });
    };

    function dataTreeInit($tree, settings) {
        // for each branch
        $tree.find('[data-tree-branch]').each(function () {
            $me = $(this);
            $me.hide();
            var branch = $(this).attr('data-tree-branch');
            var parent = '';
			var level = 0;
            // if not top-level
            if (branch.indexOf(settings.delimeter) >= 0) {
                var arr = branch.split(settings.delimeter);
                arr.length = arr.length - 1;
                parent = arr.join(settings.delimeter);
				level = arr.length;
            }
            $me.addClass('data-tree-level' + level);
            $me.attr('data-tree-parent', parent);
            $me.attr('data-tree-open', 0);
            
            // if the parent is open, show me, else hide me
            if (($tree.find('[data-tree-branch="' + parent + '"]').attr('data-tree-open') == 1) || (parent == '')) {
                $me.show();
            } else {
                $me.hide();
            }
            
            // if end node, add end node class, else show it closed
            if ($tree.find('[data-tree-branch^="' + branch + '"]').length == 1) {
                $me.addClass(settings.endCSS);
            } else {
                $me.addClass(settings.closedCSS);
            }
            // if this branch is in the initial opened arr, open it and all ancestors
            if (settings.opened.indexOf(branch) >= 0) {
                dataTreeOpenAncestors($tree, branch, settings)
            }
        });
		
        // click event
        $tree.on('click', '[data-tree-click]', function () {
            dataTreeOpenCloseBranch($tree, $(this).attr('data-tree-click'), settings);
        });
    }
    
	// recursive function to open branch and all of it's ancestors
    function dataTreeOpenAncestors($tree, branch, settings) {
        var $branch = $tree.find('[data-tree-branch="' + branch + '"]');
        var parent = $branch.attr('data-tree-parent');
        dataTreeOpenCloseBranch($tree, branch, settings);
        if (parent!='') {
            dataTreeOpenAncestors($tree, parent, settings);
        }
    }

	// function to open/close the branch
    function dataTreeOpenCloseBranch($tree, branch, settings) {
        var $branch = $tree.find('[data-tree-branch="' + branch + '"]');
        var oldCSS = settings.openCSS;
        var newCSS = settings.closedCSS;
        var newState = 0;
        if ($branch.attr('data-tree-open') == 0) {
            newState = 1;
            oldCSS = settings.closedCSS;
            newCSS = settings.openCSS;
        }
        $branch.attr('data-tree-open', newState);
        $branch.removeClass(oldCSS);
        $branch.addClass(newCSS);
        dataTreeBranchVisible($tree, branch, $branch.attr('data-tree-open'));
    }

	// function to show or hide the children of said branch
    function dataTreeBranchVisible($tree, branch, visibility) {
        $tree.find('[data-tree-parent="' + branch + '"]').each(function () {
            $me = $(this);
            visibility == 1 ? $me.show() : $me.hide();
            if ((visibility == 1 && $me.attr('data-tree-open') == 1) || (visibility == 0)) {
                branch = $me.attr('data-tree-branch');
                dataTreeBranchVisible($tree, branch, visibility);
            }
        });
    }
}(jQuery));