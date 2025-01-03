function CodeUrl(url) {
    const Problem = "https://leetcode.com/problems/";
    if (!url.endsWith("/")) {
        url += "/";
    }

    const Match = url.match(/problems\/([^/]+)/);

    if (Match) {
        const slg = Match[1];
        return `${Problem}${slg}/description/`;
    } else {
        return url;
    }
}

module.exports = { CodeUrl };
