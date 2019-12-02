import React from 'react';

const templates: any = {
    prefix: "",
    suffix: " ago",
    seconds: "less than a minute",
    minute: "about a minute",
    minutes: "%d minutes",
    hour: "about an hour",
    hours: "about %d hours",
    day: "a day",
    days: "%d days",
    month: "about a month",
    months: "%d months",
    year: "about a year",
    years: "%d years"
};

const template = (key: any, val: number) => {
    return ( templates[key] && templates[key].replace(/%d/i, Math.abs(Math.round(val))));
};

var timer = (time: any) => {
    if (!time)
        return;
    time = time.replace(/\.\d+/, ""); // remove milliseconds
    time = time.replace(/-/, "/").replace(/-/, "/");
    time = time.replace(/T/, " ").replace(/Z/, " UTC");
    time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
    time = new Date(time * 1000 || time);

    var now = new Date();
    var seconds = ((now.getTime() - time) * .001) >> 0;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;
    var years = days / 365;

    return templates.prefix + (
            (seconds < 45 && template('seconds', seconds)) ||
            (seconds < 90 && template('minute', 1)) ||
            (minutes < 45 && template('minutes', minutes)) ||
            (minutes < 90 && template('hour', 1)) ||
            (hours < 24 && template('hours', hours)) ||
            (hours < 42 && template('day', 1)) ||
            (days < 30 && template('days', days)) ||
            (days < 45 && template('month', 1)) ||
            (days < 365 && template('months', days / 30)) ||
            (years < 1.5 && template('year', 1)) ||
            template('years', years)
            ) + templates.suffix;
};

interface TimeAgoProps {
    time: string;
}

const TimeAgo: React.FC<TimeAgoProps> = ({time}: TimeAgoProps) => {
    // setTimeout(timeAgo, 60000);
    return (
        timer(time)
    )
}

export default TimeAgo;