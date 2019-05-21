/**
 * Created by Fomichev Yuri on 16.04.2019
 * Contact me at : toki.stamp@gmail.com
 */
function goDeep(tree, path, data, parents) {
    var currentLevel = parseInt(path.shift(), 10),
        thisParents  = (parents || []);

    if (!tree[currentLevel]) {
        tree[currentLevel] = Object.create(null);
    }

    if (path.length) {
        if (!tree[currentLevel].children) {
            tree[currentLevel].children = Object.create(null);
        }

        thisParents.push(currentLevel);
        goDeep(tree[currentLevel].children, path, data, parents);
    } else {
        tree[currentLevel].level = parseInt(data.lev, 10);
        tree[currentLevel].data  = data;

        if (thisParents && thisParents.length) {
            tree[currentLevel].parents = thisParents;
        }
    }

    return tree;
}

function goStraight(tree, data) {
    var path      = data.tree.substring(1).split('/'),
        currentID = data.id,
        level     = parseInt(data.lev),
        parents   = (level > 1) ? path.slice(0, (path.length - 1)) : null;

    tree[currentID]       = Object.create(null);
    tree[currentID].level = level;
    tree[currentID].data  = data;

    if (parents) {
        parents.forEach(function (step) {
            var children = (tree[step].children ? tree[step].children : []);

            if (!children.includes(currentID)) {
                children.push(currentID);
            }

            tree[step].children = children;
        });

        tree[currentID].parents = parents;
    }

    return tree;
}